import { createEl } from "../helpers/createEl";
import { ElOptions } from "../types";

type ImageProps = ElOptions;

class Image {
  private content({ ...rest }: ImageProps): HTMLImageElement {
    return createEl("img", {
      ...rest,
    });
  }

  public render({ ...rest }: ImageProps): HTMLImageElement {
    return this.content({ ...rest });
  }
}

export default new Image();
