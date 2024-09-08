export interface PopupButtonProps {
  id: string;
  title: string;
  description: string;
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
