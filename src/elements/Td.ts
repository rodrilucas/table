import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type TdProps = ElOptions;

class Td {
  private content({ ...rest }: TdProps): HTMLTableCellElement {
    return createEl("td", {
      ...rest,
    });
  }

  public render({ ...rest }: TdProps): HTMLTableCellElement {
    return this.content({ ...rest });
  }
}

export default new Td();
