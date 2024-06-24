import React, { useState } from "react";

function LeftArrow() {
  const [showArrow, setShowArrow] = useState(false);

  function arrowClickHandler(e, direction) {
    const element = e.view.document.activeElement.parentNode.children[2];
    // console.log(e);
    if (direction === "left") {
      element.scrollLeft -= 500;
    } else {
      element.scrollLeft += 500;
    }
  }

  return (
    <>
      <button
        onClick={(e) => arrowClickHandler(e, "left")}
        onMouseEnter={() => {
          setShowArrow(true);
        }}
        onMouseLeave={() => {
          setShowArrow(false);
        }}
        style={{
          opacity: showArrow ? "1" : "0",
        }}
        className="left-arrow"
      ></button>
    </>
  );
}

export default LeftArrow;
