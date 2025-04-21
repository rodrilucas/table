import { ElOptions } from "../types";
import { el as createElement } from "../selectors/selectors";

const createEl = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options: ElOptions = {}
): HTMLElementTagNameMap[K] => {
  const el = createElement(tag);

  if (options.className) el.className = options.className;
  if (options.text) el.textContent = options.text;
  if (options.id) el.id = options.id;

  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      el.setAttribute(key, value);
    }
  }

  if (options.dataset) {
    for (const [key, value] of Object.entries(options.dataset)) {
      el.dataset[key] = value;
    }
  }

  if (options.styles) {
    Object.assign(el.style, options.styles);
  }

  if (options.events) {
    for (const [event, handler] of Object.entries(options.events)) {
      el.addEventListener(event, handler);
    }
  }

  if (options.children) {
    el.append(...options.children);
  }

  return el;
};

export { createEl };