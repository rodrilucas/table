import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type HeadingProps = ElOptions & { level?: 1 | 2 | 3 | 4 | 5 | 6 };

class Heading {
  private content({ level = 1, ...rest }: HeadingProps): HTMLHeadingElement {
    const tag = `h${level}` as keyof HTMLElementTagNameMap;
    return createEl(tag, {
      ...rest,
    }) as HTMLHeadingElement;
  }

  public render({ ...rest }: HeadingProps): HTMLHeadingElement {
    return this.content({ ...rest });
  }
}

export default new Heading();
