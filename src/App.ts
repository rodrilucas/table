import { $ } from "./selectors/selectors";
import SortableTable from "./components/Sortable";
import { config, data } from "./data";
import { ReturnType } from "./types";

type DataItem = ReturnType<typeof data>;

class App {
  static render() {
    $("#app")?.append(
      new SortableTable<DataItem>().render({
        config,
        data,
      })
    );
  }
}

export default App;
