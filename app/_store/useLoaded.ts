
import { create } from "zustand";

interface LoadedState {
  loaded: boolean;
  setLoaded: (value: boolean) => void;
}

export const useLoadedStore = create<LoadedState>((set) => ({
  loaded: false,
  setLoaded: (value) => set({ loaded: value }),
}));
