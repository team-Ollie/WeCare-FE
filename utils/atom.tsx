import { atom } from "jotai";

export const isAdminAtom = atom<boolean>(true);

export const challengeIdxAtom = atom<number>(-1);

export const centerNameAtom = atom<string>("");
