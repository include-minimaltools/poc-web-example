import { create } from "zustand";

type BreadcumpItem = {
  title: string;
  to?: string;
}

type useBreadcumpsProps = {
  items: BreadcumpItem[];
  setItems: (items: BreadcumpItem[]) => void;
}

const useBreadcump = create<useBreadcumpsProps>((set) => ({
  items: [],
  setItems: (items: BreadcumpItem[]) => set({ items: items })
}))

export default useBreadcump;
