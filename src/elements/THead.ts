import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type TheadProps = ElOptions;

class Thead {
  private content({ ...rest }: TheadProps): HTMLTableSectionElement {
    return createEl("thead", {
      ...rest,
    });
  }

  public render({ ...rest }: TheadProps): HTMLTableSectionElement {
    return this.content({ ...rest });
  }
}

export default new Thead();
