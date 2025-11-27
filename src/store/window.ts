import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants/index';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type WindowKey = keyof typeof WINDOW_CONFIG;

interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: any;
}
type WindowsState = Record<WindowKey, WindowState>;

interface WindowStore {
  windows: WindowsState;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: any) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey, data?: any) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: { ...WINDOW_CONFIG },
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];

        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];

        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX - 1;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];

        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
