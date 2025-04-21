export type ElOptions = {
  className?: string;
  text?: string;
  attrs?: Record<string, string>;
  id?: string;
  dataset?: Record<string, string>;
  styles?: Partial<CSSStyleDeclaration>;
  events?: Record<string, (e: Event) => void>;
  children?: Node[] | HTMLElement[];
};

export type TableColumn<T> = {
  header?: () => HTMLElement;
  label: string;
  render: (rowData: T) => Node | HTMLElement;
  sortValue?: (rowData: T) => string | number;
};

export type TableProps<T extends object> = {
  data: T[];
  config: TableColumn<T>[];
  keyFn?: (rowData: T) => string;
};

export type ReturnType<T> = T extends Array<infer U> ? U : never;
