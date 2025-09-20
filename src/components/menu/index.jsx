import "./styleMenu.css";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { CSSTransition } from "react-transition-group";

import Sidebar from "../Sidebar";

function Menu() {
  const [open, setOpen] = useState(false);

  function dysplayButton() {
    if (!open) {
      return "flex";
    }

    if (open) {
      return "hidden";
    }
  }

  const nodeRef = useRef(null);
  return (
    <>
      <button
        className={`bg-brand-primary w-10 cursor-pointer items-center justify-center self-end rounded-sm p-1 lg:hidden ${dysplayButton()}`}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <AiOutlineClose size={30} color="var(--color-brand-white)" />
        ) : (
          <IoMdMenu size={30} color="var(--color-brand-white)" />
        )}
      </button>

      <CSSTransition nodeRef={nodeRef} in={open} timeout={500} classNames="sidebar" unmountOnExit>
        <div>
          {createPortal(
            <div className="sideBar" ref={nodeRef}>
              <Sidebar open={open} setOpen={setOpen} />
            </div>,
            document.body,
          )}
        </div>
      </CSSTransition>
    </>
  );
}

export default Menu;
