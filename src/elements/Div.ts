import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type DivProps = ElOptions;

class Div {
  private content({ ...rest }: DivProps): HTMLDivElement {
    return createEl("div", {
      ...rest,
    });
  }

  public render({ ...rest }: DivProps): HTMLDivElement {
    return this.content({ ...rest });
  }
}

export default new Div();
