import {create} from 'zustand';
import { PopupStore } from '../types/types';



const usePopupStore = create<PopupStore>((set) => ({
  popups: [],
  addPopup: (popup) => set((state) => ({
    popups: [...state.popups, popup]
  })),
  removePopup: (id) => set((state) => ({
    popups: state.popups.filter(p => p.id !== id)
  })),
  movePopup: (id, newPosition) => set((state) => ({
    popups: state.popups.map(popup =>
      popup.id === id ? { ...popup, defaultPosition: { ...popup.defaultPosition, ...newPosition } } : popup
    )
  })),
  bringToFront: (id) => set((state) => {
    const maxZIndex = Math.max(...state.popups.map(p => p.zIndex), 0) + 1;
    return {
        popups: state.popups.map(popup =>
            popup.id === id ? { ...popup, zIndex: maxZIndex } : popup
        )
    };
}),
  clearPopups: () => set({ popups: [] })
}));

export default usePopupStore;
