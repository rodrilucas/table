import Td from "../elements/Td";
import Tr from "../elements/Tr";
import Th from "../elements/Th";
import TBody from "../elements/TBody";
import THead from "../elements/THead";
import CreateTable from "../elements/CreateTable";
import { TableProps } from "../types";
import { $ } from "../selectors/selectors";
import Modal from "./Modal";
import Card, { CardProps } from "./Card";

class Table {
  private content<T extends object>({ data, config }: TableProps<T>) {
    const renderedHeaders = config.map((column) => {
      return column.header
        ? column.header()
        : Th.render({
            text: column.label,
          });
    });

    const renderedData = data.map((rowData) => {
      const renderedCells = config.map((column) =>
        Td.render({
          className: "py-2 px-4 text-sm cursor-pointer",
          children: [column.render(rowData)],
          events: {
            click: () => {
              $("body")?.append(
                Modal.render({
                  htmlElement: Card.render({
                    item: rowData as CardProps["item"],
                  }),
                })
              );
            },
          },
        })
      );

      return Tr.render({
        className: "border border-[#1c2433] w-full text-sm hover:bg-gray-800",
        children: renderedCells,
      });
    });

    return CreateTable.render({
      className: "table-auto w-full bg-[#101828] text-sm text-center",
      children: [
        THead.render({
          children: [
            Tr.render({
              className: "border border-[#28303e]",
              children: renderedHeaders,
            }),
          ],
        }),
        TBody.render({
          children: renderedData,
        }),
      ],
    });
  }

  public render<T extends object>({ ...rest }: TableProps<T>) {
    return this.content(rest);
  }
}

export default new Table();
