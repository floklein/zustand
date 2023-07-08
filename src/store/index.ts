import { createStore, useStore } from "zustand";
import { createContext, useContext } from "react";

export interface Tab {
  uuid: string;
}

interface PlaygroundState {
  tabs: Tab[];
  addTab: (tab: Tab) => void;
  deleteTab: (uuid: string) => void;
}

export const createPlaygroundStore = () =>
  createStore<PlaygroundState>((set) => ({
    tabs: [],
    addTab: (tab) => set((state) => ({ tabs: [...state.tabs, tab] })),
    deleteTab: (uuid) =>
      set((state) => ({ tabs: state.tabs.filter((tab) => tab.uuid !== uuid) })),
  }));

export const PlaygroundStoreContext = createContext(createPlaygroundStore());

export const usePlaygroundStore = <U>(
  selector: (state: PlaygroundState) => U,
): U => {
  const store = useContext(PlaygroundStoreContext);
  return useStore(store, selector);
};
