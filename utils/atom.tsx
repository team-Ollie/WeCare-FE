import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const isAdminAtom = atomWithStorage("isAdmin", false);
isAdminAtom.debugLabel = "isAdminAtom";

export const challengeIdxAtom = atom<number>(-1);
challengeIdxAtom.debugLabel = "challengeIdxAtom";

export const centerNameAtom = atomWithStorage("centerName", "");
centerNameAtom.debugLabel = "centerNameAtom";
