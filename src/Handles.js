import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export function Handles({
  totalWidth,
  totalHeight,
  totalImages,
  zIndex,
  listRefs,
  updateDesc,
}) {
  const [currentHandle, setCurrentHandle] = useState(null);
  const handleRefs = useRef([]);
  const handleRef = useRef([]);

  useEffect(() => {
    document.addEventListener("mousemove", moveEvent);
    document.addEventListener("mouseup", onEnd);
    document.addEventListener("touchend", onEnd);
    document.addEventListener("touchmove", moveEvent);

    return () => {
      document.removeEventListener("mousemove", moveEvent);
      document.removeEventListener("mouseup", onEnd);
      document.removeEventListener("touchend", onEnd);
      document.removeEventListener("touchmove", moveEvent);
    };
  });

  const onMouseDown = (e, i) => {
    setCurrentHandle(i);
    handleRefs.current[i].offset = e.pageX - handleRefs.current[i].offsetLeft;
  };
  const onEnd = (e) => {
    setCurrentHandle(null);
  };
  const touchStart = (e, i) => {
    setCurrentHandle(i);
    handleRefs.current[i].offset = e.pageX - handleRefs.current[i].offsetLeft;
  };

  const moveEvent = (e) => {
    if (currentHandle !== null) {
      if (e.changedTouches) {
        e = e.changedTouches[0];
      }
      let handle = handleRefs.current[currentHandle];
      const handlePosition = Math.min(
        Math.max(e.clientX - handle.offset, 0 - handle.clientWidth / 2),
        totalWidth - handle.clientWidth / 2
      );
      const elementPosition = handlePosition + handle.clientWidth / 2;

      handle.style.left = `${handlePosition}px`;
      listRefs.current[currentHandle].style.width = `${elementPosition}px`;

      handleRefs.current.forEach((h, index) => {
        if (currentHandle > index && handle.offsetLeft <= h.offsetLeft) {
          h.style.left = `${handlePosition}px`;
          listRefs.current[index].style.width = `${handlePosition + 15}px`;
        }

        if (currentHandle < index && handle.offsetLeft >= h.offsetLeft) {
          h.style.left = `${handlePosition}px`;
          listRefs.current[index].style.width = `${handlePosition + 15}px`;
        }
      });

      updateDesc(handleRefs);
    }
  };

  const topPosition = (i) => {
    handleHeight = (30 / totalHeight) * 100;

    handleClearanceFactor = 0.5;
    heightClearance = handleClearanceFactor * handleHeight;
    handleDistance = handleHeight + heightClearance;

    handleHeightFirstToLast = (totalImages - 1) * handleDistance;

    return 50 + handleHeightFirstToLast / 2 - i * handleDistance;
  };

  return (
    <div className="handles" ref={handleRef}>
      {Array(totalImages - 1)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            ref={(ref) => (handleRefs.current[i] = ref)}
            onMouseDown={(e) => onMouseDown(e, i)}
            onTouchStart={(e) => touchStart(e, i)}
            className="handle"
            style={{
              zIndex: totalImages - 2 * i + zIndex,
              left: `${(totalWidth / totalImages) * (i + 1) - 30 / 2}px`,
              top: `${topPosition(i)}%`,
            }}
          ></div>
        ))}
    </div>
  );
}

Image.propTypes = {
  totalWidth: PropTypes.number.isRequired,
  totalHeight: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  updateDesc: PropTypes.func,
};
