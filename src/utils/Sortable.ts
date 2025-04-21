import { TableProps } from "../types";

export enum sortable {
  ASC = "asc",
  DESC = "desc",
}

class Sortable<T extends object> {
  private sortOrder: sortable | null = null;
  private sortBy: string | null = null;
  private data: T[] = [];

  private sort({ data, config }: TableProps<T>): T[] {
    const columnConfig = config.find((column) => column.label === this.sortBy);

    if (!columnConfig || !columnConfig.sortValue) {
      return this.sortBy === null || this.sortOrder === null ? this.data : data;
    }

    const sortedData = [...data].sort((a, b) => {
      const valueA = columnConfig.sortValue!(a);
      const valueB = columnConfig.sortValue!(b);
      const reverseOrder = this.sortOrder === sortable.ASC ? 1 : -1;

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      }

      return (Number(valueA) - Number(valueB)) * reverseOrder;
    });

    return sortedData;
  }

  
  public getSortOrder(): sortable | null {
    return this.sortOrder;
  }
  
  public setSort({ data, config }: TableProps<T>): T[] {
    return this.sort({ data, config });
  }

  public setSortOrder(label: string): void {
    if (this.sortBy && label !== this.sortBy) {
      this.sortOrder = sortable.ASC;
      this.sortBy = label;
      return;
    }
    if (this.sortOrder === null) {
      this.sortOrder = sortable.ASC;
      this.sortBy = label;
    } else if (this.sortOrder === sortable.ASC) {
      this.sortOrder = sortable.DESC;
    } else {
      this.sortOrder = null;
      this.sortBy = null;
    }
  }

  public getSortBy(): string | null {
    return this.sortBy;
  }

  public getData(): T[] {
    return this.data;
  }

  public setData(data: T[]): void {
    this.data = data;
  }
}

export default Sortable;
