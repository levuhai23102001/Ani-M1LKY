import React, { useState, useEffect, useRef } from "react";
import "./popover.scss";

const Popover = (props) => {
  //Open Popover dropdown
  const [isOpen, setIsOpen] = useState(false);
  //Popover dropdown ref
  const popoverRef = useRef();
  //Handle Click Outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    window.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className="popover-btn">
        {props.icon}
      </div>
      <div className={isOpen ? "popover active" : "popover"} ref={popoverRef}>
        {props.children}
      </div>
    </>
  );
};

export const PopoverContent = (props) => {
  return <ul className="popover-list">{props.children}</ul>;
};

export default Popover;
