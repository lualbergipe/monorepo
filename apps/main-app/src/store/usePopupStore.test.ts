import { renderHook, act } from '@testing-library/react-hooks';
import usePopupStore from './popupStore';

describe('usePopupStore', () => {
  it('should add a popup correctly', () => {
    const { result } = renderHook(() => usePopupStore());
    act(() => {
      result.current.addPopup({
        id: '1',
        title: 'Test title Popup',
        description: 'Test description Popup',
        defaultPosition: {
        x: 100, y: 100,
        width: 100,
        height: 100
      }, zIndex: 1 });
    });

    expect(result.current.popups).toEqual([
      { id: '1', title: 'Test title Popup', description: 'Test description Popup', defaultPosition: { x: 100, y: 100,  width: 100, height: 100 }, zIndex: 1 }
    ]);
  });

  it('should remove a popup correctly', () => {
    const { result } = renderHook(() => usePopupStore());
    act(() => {
      result.current.addPopup({
        id: '1',
        title: 'Test title Popup',
        description: 'Test description Popup',
        defaultPosition: {
        x: 100, y: 100,
        width: 100,
        height: 100
      }, zIndex: 1 });
      result.current.removePopup('1');
    });

    expect(result.current.popups).toEqual([]);
  });
});
