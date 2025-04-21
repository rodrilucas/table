import Div from "../elements/Div";
import { $ } from "../selectors/selectors";

type ModalProps = {
  onClose?: () => void;
  htmlElement?: HTMLElement;
};

class Modal {
  private content({ onClose, htmlElement }: ModalProps): HTMLDivElement {
    return Div.render({
      className:
        "modal fixed inset-0 bg-[#00000083] flex items-center justify-center",
      events: {
        click: () => {
          $(".modal")?.remove();
          onClose?.();
        },
      },
      children: [htmlElement!],
    });
  }

  public render({ onClose, htmlElement }: ModalProps): HTMLDivElement {
    return this.content({ onClose, htmlElement });
  }
}

export default new Modal();
