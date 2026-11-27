import { create } from "zustand";

interface UIState {
  selectedHouseholdId: string | null;

  // Reserved for future use
  draftPasteBuffer: string;
  briefCopyFlash: boolean;

  // Actions or updation
  setSelectedHouseholdId: (id: string | null) => void;
}

export const useUIStore = create<UIState>((set) => ({
  
  selectedHouseholdId: null,
  draftPasteBuffer: "",
  briefCopyFlash: false,

  setSelectedHouseholdId: (id) =>
    set({ selectedHouseholdId: id }),
}));