import { defineStore } from "pinia";
import { ENUM_TEST } from "../enums/EnumTest";

export const useTestStore = defineStore({
  id: "test",
  state: () => ({
    enumValue: ENUM_TEST.TEST,
  }),
  persist: {
    storage: localStorage,
  },
});
