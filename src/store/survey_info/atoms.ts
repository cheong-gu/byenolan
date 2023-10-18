import { atom } from "recoil";

export const infoState = atom({
  key: "infoState",
  default: {} as InfoType,
});
