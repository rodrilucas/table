import { ElOptions } from "../types";

type FragmentProps = Omit<
  ElOptions,
  "className" | "attrs" | "id" | "dataset" | "styles" | "events" | "text"
>;

class Fragment {
  private content({ children = [] }: FragmentProps): DocumentFragment {
    const fragment = document.createDocumentFragment();
    children.forEach((child) => fragment.appendChild(child));
    return fragment;
  }

  public render({ ...rest }: FragmentProps): DocumentFragment {
    return this.content(rest);
  }
}

export default new Fragment();
