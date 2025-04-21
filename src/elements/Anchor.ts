import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type AnchorProps = ElOptions;

class Anchor {
  private content({ ...rest }: AnchorProps): HTMLAnchorElement {
    return createEl("a", {
      ...rest,
    });
  }

  public render({ ...rest }: AnchorProps): HTMLAnchorElement {
    return this.content({ ...rest });
  }
}

export default new Anchor();
