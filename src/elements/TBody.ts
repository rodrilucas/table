import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type TbodyProps = ElOptions;

class Tbody {
  private content({ ...rest }: TbodyProps): HTMLTableSectionElement {
    return createEl("tbody", {
      ...rest,
    });
  }

  public render({ ...rest }: TbodyProps): HTMLTableSectionElement {
    return this.content({ ...rest });
  }
}

export default new Tbody();
