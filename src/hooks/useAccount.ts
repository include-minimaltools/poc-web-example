import { create } from "zustand";

type useAccountProps = {
  isAuth: boolean;
  login: () => void;
}

const useAccount = create<useAccountProps>((set) => ({
  isAuth: false,
  login: () => set(() => ({ isAuth: true })),
}))

export default useAccount
