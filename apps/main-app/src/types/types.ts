import {ReactNode} from 'react';




export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ModalProps extends BaseModalProps {
  children: ReactNode;}

export interface ModalFormProps extends BaseModalProps {
  onSubmit: (title: string, description: string, dimensions: { x: number, y: number, width: number, height: number }) => void;
}

