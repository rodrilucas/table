import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type TableProps = ElOptions;

class CreateTable {
  private content({ ...rest }: TableProps): HTMLTableElement {
    return createEl("table", {
      ...rest,
    });
  }

  public render({ ...rest }: TableProps): HTMLTableElement {
    return this.content({ ...rest });
  }
}

export default new CreateTable();
