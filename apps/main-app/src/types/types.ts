import {ReactNode} from 'react';
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

export interface PopupStore {
  popups: Popup[];
  addPopup: (popup: Popup) => void;
  removePopup: (id: string) => void;
  movePopup: (id: string, newPosition: { x: number; y: number }) => void;
  bringToFront:(id: string)=> void;
  clearPopups: () => void;
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalProps extends BaseModalProps {
  children: ReactNode;}

export interface ModalFormProps extends BaseModalProps {
  onSubmit: (title: string, description: string, dimensions: { x: number, y: number, width: number, height: number }) => void;
}

