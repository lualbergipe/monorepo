export interface PopupButtonProps {
  id: string;
  defaultPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
export interface PopupProps {
  containerSize:{
    width: number;
    height: number;
  }
}
export interface PopupStore {
  popups: Popup[];
  addPopup: (popup: Popup) => void;
  removePopup: (id: string) => void;
  movePopup: (id: string, newPosition: { x: number; y: number }) => void;
  bringToFront:(id: string)=> void;
  clearPopups: () => void;
}
export interface Popup {
  id: string;
  title: string;
  description: string;
  defaultPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  zIndex: number;
}
