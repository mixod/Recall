import { create } from "zustand";

const useStore = create((set) => (
    {
        number: 0,
        increase: () => set((state) => ({ number: state.number + 1 }
        ))
    }
))
export default useStore;