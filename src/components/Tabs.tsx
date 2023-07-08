import { FC } from "react";
import { usePlaygroundStore } from "../store";
import Tab from "./Tab.tsx";

const Tabs: FC = () => {
  const tabs = usePlaygroundStore((state) => state.tabs);

  return tabs.map((tab) => <Tab tab={tab} key={tab.uuid} />);
};

export default Tabs;
