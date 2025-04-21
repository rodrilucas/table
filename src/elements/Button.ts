import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type ButtonProps = ElOptions;

class Button {
  private content({ ...rest }: ButtonProps): HTMLButtonElement {
    return createEl("button", {
      ...rest,
      className: `cursor-pointer ${rest.className}`,
    });
  }

  public render({ ...rest }: ButtonProps): HTMLButtonElement {
    return this.content({ ...rest });
  }
}

export default new Button();
