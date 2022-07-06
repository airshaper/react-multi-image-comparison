import require$$0, { useRef, useState, useEffect } from "react";
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
function Handles({
  totalWidth,
  totalHeight,
  totalImages,
  zIndex,
  listWidths,
  setListWidths,
  updateDesc
}) {
  const initialDimensions = Array.from({
    length: totalImages - 1
  }, (_, i) => totalWidth / totalImages * (i + 1) - 30 / 2);
  const handleRefs = useRef([]);
  const [activeHandle, setActiveHandle] = useState(null);
  const [handlePositions, setHandlePositions] = useState(initialDimensions);
  const [handleOffsets, setHandleOffsets] = useState(Array(totalImages - 1).fill(0));
  useEffect(() => {
    document.addEventListener("pointermove", moveEvent);
    document.addEventListener("pointerup", onEnd);
    document.addEventListener("touchend", onEnd);
    document.addEventListener("touchmove", moveEvent);
    return () => {
      document.removeEventListener("pointermove", moveEvent);
      document.removeEventListener("pointerup", onEnd);
      document.removeEventListener("touchend", onEnd);
      document.removeEventListener("touchmove", moveEvent);
    };
  });
  const onPointerDown = (e, i) => {
    setActiveHandle(i);
    setHandleOffsets(Object.assign([], handleOffsets, {
      [i]: e.pageX - handleRefs.current[i].offsetLeft
    }));
  };
  const onEnd = (e) => {
    setActiveHandle(null);
  };
  const touchStart = (e, i) => {
    setActiveHandle(i);
    setHandleOffsets(Object.assign([], handleOffsets, {
      [i]: e.pageX - handleRefs.current[i].offsetLeft
    }));
  };
  const moveEvent = (e) => {
    if (activeHandle !== null) {
      let handle = handleRefs.current[activeHandle];
      const handlePosition2 = Math.min(Math.max(e.touches ? e.touches[0].clientX : e.clientX - handleOffsets[activeHandle], 0 - handle.clientWidth / 2), totalWidth - handle.clientWidth / 2);
      setListWidths(Object.assign([], listWidths, {
        [activeHandle]: handlePosition2 + handle.clientWidth / 2
      }));
      setHandlePositions(Object.assign([], handlePositions, {
        [activeHandle]: handlePosition2
      }));
      handlePositions.forEach((h, index) => {
        if (activeHandle > index && handle.offsetLeft <= h) {
          setHandlePositions(Object.assign([], handlePositions, {
            [index]: handlePosition2 - 3
          }));
          setListWidths(Object.assign([], listWidths, {
            [index]: handlePosition2 + 15
          }));
        }
        if (activeHandle < index && handle.offsetLeft >= h) {
          setHandlePositions(Object.assign([], handlePositions, {
            [index]: handlePosition2 + 3
          }));
          setListWidths(Object.assign([], listWidths, {
            [index]: handlePosition2 + 15
          }));
        }
      });
      updateDesc(handlePositions);
    }
  };
  const handlePosition = (i) => {
    const handleHeight = 30 / totalHeight * 100;
    const handleClearanceFactor = 0.5;
    const heightClearance = handleClearanceFactor * handleHeight;
    const handleDistance = handleHeight + heightClearance;
    const handleHeightFirstToLast = (totalImages - 1) * handleDistance;
    return 50 + handleHeightFirstToLast / 2 - i * handleDistance;
  };
  useEffect(() => {
    setHandlePositions(initialDimensions);
  }, [totalWidth, totalHeight]);
  return /* @__PURE__ */ jsx("div", {
    className: "handles",
    children: Array(totalImages - 1).fill(0).map((_, i) => /* @__PURE__ */ jsx("div", {
      ref: (ref) => handleRefs.current[i] = ref,
      onPointerDown: (e) => onPointerDown(e, i),
      onTouchStart: (e) => touchStart(e, i),
      className: "handle",
      style: {
        zIndex: totalImages - 2 * i + zIndex,
        left: `${handlePositions[i]}px`,
        top: `${handlePosition(i)}%`
      }
    }, i))
  });
}
Handles.propTypes = {
  totalWidth: PropTypes.number.isRequired,
  totalHeight: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  listWidths: PropTypes.array.isRequired,
  setListWidths: PropTypes.func.isRequired,
  updateDesc: PropTypes.func
};
function ReactMultiImageComparison({
  imagePaths,
  imageDescs,
  zIndex
}) {
  const textRefs = useRef([]);
  const listRef = useRef(null);
  const [descLeft, setDescLeft] = useState(Array(imagePaths.length).fill(0));
  const [listWidths, setListWidths] = useState([]);
  const [totalWidth, setTotalWidth] = useState(0);
  const [totalHeight, setTotalHeight] = useState(0);
  const initialListWidths = Array.from({
    length: imagePaths.length
  }, (_, i) => totalWidth / imagePaths.length * (i + 1));
  const updateDesc = (handlePositions) => {
    setDescLeft(descLeft.map((_item, idx) => textPosition(idx, handlePositions)));
  };
  const textPosition = (i, handlePositions) => {
    const textWidth = textRefs.current[i].clientWidth;
    if (i === 0) {
      return listWidths[i] / 2 - textWidth / 2;
    }
    if (imagePaths.length - 1 === i) {
      return (listWidths[i] + handlePositions[i - 1]) / 2 - textWidth / 2;
    }
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
    let initialDescPositions = descLeft.map((_item, i) => totalWidth / imagePaths.length * (2 * i + 1) * 0.5 - textRefs.current[i].clientWidth / 2);
    setDescLeft(initialDescPositions);
  }, [totalWidth]);
  useEffect(() => {
    setListWidths(initialListWidths);
  }, [totalWidth]);
  return /* @__PURE__ */ jsxs("div", {
    style: {
      position: "relative"
    },
    children: [/* @__PURE__ */ jsx("ul", {
      className: "rmic",
      ref: listRef,
      children: imagePaths.map((image, i) => /* @__PURE__ */ jsxs("li", {
        style: {
          zIndex: imagePaths.length - (2 * i + 1) + zIndex,
          width: `${listWidths[i]}px`
        },
        children: [/* @__PURE__ */ jsx("img", {
          src: image,
          alt: "Alt",
          style: {
            width: totalWidth
          }
        }), imageDescs.length > 0 && /* @__PURE__ */ jsx("span", {
          ref: (ref) => textRefs.current[i] = ref,
          style: {
            left: `${descLeft[i]}px`
          },
          children: imageDescs[i]
        })]
      }, i))
    }), /* @__PURE__ */ jsx(Handles, {
      totalWidth,
      totalHeight,
      listWidths,
      setListWidths,
      updateDesc,
      totalImages: imagePaths.length,
      zIndex
    })]
  });
}
ReactMultiImageComparison.defaultProps = {
  zIndex: 100,
  imageDescs: []
};
ReactMultiImageComparison.propTypes = {
  imagePaths: PropTypes.array.isRequired,
  imageDescs: PropTypes.array,
  zIndex: PropTypes.number
};
export { ReactMultiImageComparison };
//# sourceMappingURL=react-multi-image-comparison.es.js.map
