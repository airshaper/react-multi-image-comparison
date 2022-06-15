import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Handles } from "./Handles";

export function ReactMultiImageComparison({ imagePaths, imageDescs, zIndex }) {
  const listRefs = useRef([]);
  const [descLeft, setDescLeft] = useState(Array(imagePaths.length).fill(0));
  const [totalWidth, setTotalWidth] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  const listRef = useCallback((node) => {
    if (node !== null) {
      setTotalWidth(node.clientWidth);
      setTotalHeight(node.clientHeight);
    }
  }, []);

  const updateDesc = (handleRefs) => {
    let updated = descLeft.map((_item, idx) => textPosition(idx, handleRefs));
    setDescLeft(updated);
  };

  const textPosition = (i, handleRefs) => {
    const textWidth = listRefs.current[i].lastChild.clientWidth;
    // first
    if (i === 0) {
      return listRefs.current[0].clientWidth / 2 - textWidth / 2;
    }

    //last
    if (imagePaths.length - 1 === i) {
      return (
        (listRefs.current[i].clientWidth +
          handleRefs.current[i - 1].offsetLeft) /
          2 -
        textWidth / 2
      );
    }

    // all others except first and last
    return (
      (handleRefs.current[i - 1].offsetLeft +
        handleRefs.current[i].offsetLeft) /
        2 -
      textWidth / 4
    );
  };

  useEffect(() => {
    let initialDescPositions = descLeft.map(
      (_item, i) =>
        (totalWidth / imagePaths.length) * (2 * i + 1) * 0.5 -
        listRefs.current[i].lastChild.clientWidth / 2
    );
    setDescLeft(initialDescPositions);
  }, [totalWidth]);

  return (
    <div style={{ position: "relative" }}>
      <ul className="rmic" ref={listRef}>
        {imagePaths.map((image, i) => (
          <li
            key={i}
            ref={(ref) => (listRefs.current[i] = ref)}
            style={{
              zIndex: imagePaths.length - (2 * i + 1) + zIndex,
              width: `${(totalWidth / imagePaths.length) * (i + 1)}px`,
            }}
          >
            <img src={image} alt="Alt" style={{ width: totalWidth }} />
            {imageDescs.length > 0 && (
              <span style={{ left: `${descLeft[i]}px` }}>{imageDescs[i]}</span>
            )}
          </li>
        ))}
      </ul>
      <Handles
        totalWidth={totalWidth}
        totalHeight={totalHeight}
        listRefs={listRefs}
        updateDesc={updateDesc}
        totalImages={imagePaths.length}
        zIndex={zIndex}
      />
    </div>
  );
}

ReactMultiImageComparison.defaultProps = {
  zIndex: 100,
  imageDescs: [],
};

ReactMultiImageComparison.propTypes = {
  imagePaths: PropTypes.array.isRequired,
  imageDescs: PropTypes.array,
  zIndex: PropTypes.number,
  //   optionalBigInt: PropTypes.bigint,
  //   optionalBool: PropTypes.bool,
  //   optionalFunc: PropTypes.func,
  //   optionalNumber: PropTypes.number,
  //   optionalObject: PropTypes.object,
  //   optionalString: PropTypes.string,
  //   optionalSymbol: PropTypes.symbol,
};
