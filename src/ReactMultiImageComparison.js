import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Handles } from "./Handles";

export function ReactMultiImageComparison({ imagePaths, imageDescs, zIndex }) {
  const textRefs = useRef([]);
  const listRef = useRef(null);
  const [descLeft, setDescLeft] = useState(Array(imagePaths.length).fill(0));
  const [listWidths, setListWidths] = useState([]);
  const [totalWidth, setTotalWidth] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);

  const initialListWidths = Array.from(
    { length: imagePaths.length },
    (_, i) => (totalWidth / imagePaths.length) * (i + 1)
  );

  const updateDesc = (handlePositions) => {
    setDescLeft(
      descLeft.map((_item, idx) => textPosition(idx, handlePositions))
    );
  };

  const textPosition = (i, handlePositions) => {
    const textWidth = textRefs.current[i].clientWidth;
    // first
    if (i === 0) {
      return listWidths[i] / 2 - textWidth / 2;
    }

    //last
    if (imagePaths.length - 1 === i) {
      return (listWidths[i] + handlePositions[i - 1]) / 2 - textWidth / 2;
    }

    // all others except first and last
    return (handlePositions[i - 1] + handlePositions[i]) / 2 - textWidth / 4;
  };

  useEffect(() => {
    const listElement = listRef.current;
    const resizeObserver = new ResizeObserver(([entry, ..._]) => {
      setTotalWidth(entry.target.getBoundingClientRect().width);
      setTotalHeight(entry.target.getBoundingClientRect().height);
    });
    resizeObserver.observe(listElement);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    let initialDescPositions = descLeft.map(
      (_item, i) =>
        (totalWidth / imagePaths.length) * (2 * i + 1) * 0.5 -
        textRefs.current[i].clientWidth / 2
    );
    setDescLeft(initialDescPositions);
  }, [totalWidth]);

  useEffect(() => {
    setListWidths(initialListWidths);
  }, [totalWidth]);

  return (
    <div style={{ position: "relative" }}>
      <ul className="rmic" ref={listRef}>
        {imagePaths.map((image, i) => (
          <li
            key={i}
            style={{
              zIndex: imagePaths.length - (2 * i + 1) + zIndex,
              width: `${listWidths[i]}px`,
            }}
          >
            <img src={image} alt="Alt" style={{ width: totalWidth }} />
            {imageDescs.length > 0 && (
              <span
                ref={(ref) => (textRefs.current[i] = ref)}
                style={{ left: `${descLeft[i]}px` }}
              >
                {imageDescs[i]}
              </span>
            )}
          </li>
        ))}
      </ul>
      <Handles
        totalWidth={totalWidth}
        totalHeight={totalHeight}
        listWidths={listWidths}
        setListWidths={setListWidths}
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
