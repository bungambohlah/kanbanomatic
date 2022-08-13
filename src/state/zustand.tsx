import create from 'zustand';

interface ZustandState {
  createNewList: boolean;
  setCreateNewList: (createNewList: boolean) => void;
}

const useZustandStore = create<ZustandState>()((set) => ({
  createNewList: false,
  setCreateNewList: (value: boolean) => {
    set((state) => ({
      ...state,
      createNewList: value,
    }));
  },
}));

export default useZustandStore;
