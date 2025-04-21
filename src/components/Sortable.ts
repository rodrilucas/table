import { $ } from "../selectors/selectors";
import Icon from "./Icon";
import Table from "../components/Table";
import Div from "../elements/Div";
import Th from "../elements/Th";
import { TableProps } from "../types";
import Sortable, { sortable } from "../utils/Sortable";

class SortableTable<T extends object> {
  private sortable: Sortable<T>;

  constructor() {
    this.sortable = new Sortable<T>();
  }

  private content(props: TableProps<T>): HTMLTableElement {
    const updatedConfig = props.config.map((column) => {
      if (!column.sortValue) return column;
      return {
        ...column,
        header: () =>
          Th.render({
            className: "cursor-pointer text-center p-2",
            events: {
              click: () => {
                this.sortable.setSortOrder(column.label);
                this.updateTable(props);
              },
            },
            children: [
              Div.render({
                className: "flex items-center justify-center gap-1",
                children: [this.getIcons(column.label)],
                text: column.label,
              }),
            ],
          }),
      };
    });

    return Table.render({ ...props, config: updatedConfig });
  }

  private getIcons(label: string): HTMLSpanElement {
    const iconFull = Icon.render({
      className:
        "before:w-[16px] before:h-[16px] before:bg-[url(/arrow-down-up.svg)]",
    });
    const iconDown = Icon.render({
      className:
        "before:w-[16px] before:h-[16px] before:bg-[url(/arrow-down.svg)]",
    });
    const iconUp = Icon.render({
      className:
        "before:w-[16px] before:h-[16px] before:bg-[url(/arrow-up.svg)]",
    });

    if (
      label !== this.sortable.getSortBy() ||
      this.sortable.getSortOrder() === null
    ) {
      return iconFull;
    } else if (this.sortable.getSortOrder() === sortable.ASC) {
      return iconUp;
    } else {
      return iconDown;
    }
  }

  private updateTable(props: TableProps<T>): void {
    const sortedData = this.sortable.setSort(props);

    const container = $(".my-table")!;
    container.innerHTML = "";

    const newTable = this.content({
      ...props,
      data: sortedData,
    });

    container.appendChild(newTable);
  }

  public render(props: TableProps<T>): HTMLDivElement {
    this.sortable.setData(props.data);
    return Div.render({
      className: "my-table bg-[#101828] text-white",
      children: [this.content(props)],
    });
  }
}

export default SortableTable;
