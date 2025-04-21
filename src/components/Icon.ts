import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type IconProps = ElOptions;

class Icon {
  private content({ ...rest }: IconProps) {
    return createEl("span", {
      ...rest,
      className: `inline-flex items-center justify-center before:content[''] ${
        rest.className ?? ""
      }`,
    });
  }

  public render({ ...rest }: IconProps) {
    return this.content(rest);
  }
}

export default new Icon();
