import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Drawer from "./drawer";

const ModalDrawer = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return createPortal(<Drawer />, document.getElementById("modal-root"));
  } else return null;
};

export default ModalDrawer;
