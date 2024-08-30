import { registerMicroApps, start } from "qiankun";
import render from "./render/ReactRender";

render({ loading: true });
const loader = (loading) => render({ loading });

registerMicroApps([
  {
    name: "react16",
    entry: "//localhost:7100",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react16",
  },
  {
    name: "react15",
    entry: "//localhost:7102",
    container: "#subapp-viewport",
    loader,
    activeRule: "/react15",
  },
]);

start();
