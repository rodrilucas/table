import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type ThProps = ElOptions;

class Th {
  private content({ ...rest }: ThProps): HTMLTableCellElement {
    return createEl("th", {
      ...rest,
    });
  }

  public render({ ...rest }: ThProps): HTMLTableCellElement {
    return this.content({ ...rest });
  }
}

export default new Th();
