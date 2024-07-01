import { atom } from "jotai";

export const isAdminAtom = atom<boolean>({
  key: "isAdminState",
  default: false,
});
