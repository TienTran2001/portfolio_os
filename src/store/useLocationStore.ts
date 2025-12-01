import { locations } from '#constants/index';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const DEFAULT_LOCATION = locations.work;

export type LocationType = {
  id: number;
  type?: string;
  name: string;
  icon: string;
  kind: string;
  // Optional fields for folder types
  children?: LocationType[];
  // Optional fields for files
  fileType?: string;
  position?: string;
  windowPosition?: string;
  href?: string;
  description?: string[];
  imageUrl?: string;
};

interface LocationStoreState {
  activeLocation: LocationType | null;
  setActiveLocation: (location: LocationType | null) => void;
  resetActiveLocation: () => void;
}

const useLocationStore = create<LocationStoreState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location: LocationType | null) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
