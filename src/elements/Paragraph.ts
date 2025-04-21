import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type ParagraphProps = ElOptions;

class Paragraph {
  private content({ ...rest }: ParagraphProps): HTMLParagraphElement {
    return createEl("p", {
      ...rest,
    });
  }

  public render({ ...rest }: ParagraphProps): HTMLParagraphElement {
    return this.content({ ...rest });
  }
}

export default new Paragraph();
