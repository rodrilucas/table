import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type SpanProps = ElOptions;

class Span {
  private content({ ...rest }: SpanProps): HTMLSpanElement {
    return createEl("span", {
      ...rest,
    });
  }

  public render({ ...rest }: SpanProps): HTMLSpanElement {
    return this.content({ ...rest });
  }
}

export default new Span();
