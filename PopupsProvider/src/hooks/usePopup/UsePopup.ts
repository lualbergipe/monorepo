import usePopupStore from "@lib/PopupsProvider/store/popupStore";

const usePopup = () => {
  const {
    popups,
    addPopup,
    removePopup,
    movePopup,
    bringToFront,
    clearPopups
  } = usePopupStore();

  return {
    popups,
    addPopup,
    removePopup,
    movePopup,
    bringToFront,
    clearPopups
  };
};


export default usePopup;
