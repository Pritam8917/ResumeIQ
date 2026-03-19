import { create } from "zustand";

export const useResumeStore = create((set) => ({
  data: null,
  setData: (data) => set({ data }),
  
}));
