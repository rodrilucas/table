const renderText = (value: string | number | boolean) =>
  document.createTextNode(String(value));

export { renderText };
