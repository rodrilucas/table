import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type TrProps = ElOptions;

class Tr {
  private content({ ...rest }: TrProps): HTMLTableRowElement {
    return createEl("tr", {
      ...rest,
    });
  }

  public render({ ...rest }: TrProps): HTMLTableRowElement {
    return this.content({ ...rest });
  }
}

export default new Tr();
