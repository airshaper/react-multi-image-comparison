var $2Spwt$swchelperslib_sliced_to_arrayjs = require("@swc/helpers/lib/_sliced_to_array.js");
var $2Spwt$swchelperslib_to_arrayjs = require("@swc/helpers/lib/_to_array.js");
var $2Spwt$reactjsxruntime = require("react/jsx-runtime");
var $2Spwt$react = require("react");
var $2Spwt$proptypes = require("prop-types");
var $2Spwt$swchelperslib_define_propertyjs = require("@swc/helpers/lib/_define_property.js");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ReactMultiImageComparison", function () { return $d23fa47777f53b91$export$b4fd821e44278c80; });










function $6ed78c020e6666f8$export$e687473b8d6c8292(param) {
    var totalWidth = param.totalWidth, totalHeight = param.totalHeight, totalImages = param.totalImages, zIndex = param.zIndex, listWidths = param.listWidths, setListWidths = param.setListWidths, updateDesc = param.updateDesc;
    var initialDimensions = Array.from({
        length: totalImages - 1
    }, function(_, i) {
        return totalWidth / totalImages * (i + 1) - 15;
    });
    var handleRefs = (0, $2Spwt$react.useRef)([]);
    var ref3 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(null), 2), activeHandle = ref3[0], setActiveHandle = ref3[1];
    var ref1 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(initialDimensions), 2), handlePositions = ref1[0], setHandlePositions = ref1[1];
    var ref2 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(Array(totalImages - 1).fill(0)), 2), handleOffsets = ref2[0], setHandleOffsets = ref2[1];
    (0, $2Spwt$react.useEffect)(function() {
        document.addEventListener("pointermove", moveEvent);
        document.addEventListener("pointerup", onEnd);
        document.addEventListener("touchend", onEnd);
        document.addEventListener("touchmove", moveEvent);
        return function() {
            document.removeEventListener("pointermove", moveEvent);
            document.removeEventListener("pointerup", onEnd);
            document.removeEventListener("touchend", onEnd);
            document.removeEventListener("touchmove", moveEvent);
        };
    });
    var onPointerDown = function(e, i) {
        setActiveHandle(i);
        setHandleOffsets(Object.assign([], handleOffsets, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, i, e.pageX - handleRefs.current[i].offsetLeft)));
    };
    var onEnd = function(e) {
        setActiveHandle(null);
    };
    var touchStart = function(e, i) {
        setActiveHandle(i);
        setHandleOffsets(Object.assign([], handleOffsets, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, i, e.pageX - handleRefs.current[i].offsetLeft)));
    };
    var moveEvent = function(e) {
        if (activeHandle !== null) {
            var handle = handleRefs.current[activeHandle];
            var handlePosition = Math.min(Math.max(e.touches ? e.touches[0].clientX : e.clientX - handleOffsets[activeHandle], 0 - handle.clientWidth / 2), totalWidth - handle.clientWidth / 2);
            setListWidths(Object.assign([], listWidths, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, activeHandle, handlePosition + handle.clientWidth / 2)));
            setHandlePositions(Object.assign([], handlePositions, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, activeHandle, handlePosition)));
            handlePositions.forEach(function(h, index) {
                if (activeHandle > index && handle.offsetLeft <= h) {
                    setHandlePositions(Object.assign([], handlePositions, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, index, handlePosition - 3)));
                    setListWidths(Object.assign([], listWidths, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, index, handlePosition + 15)));
                }
                if (activeHandle < index && handle.offsetLeft >= h) {
                    setHandlePositions(Object.assign([], handlePositions, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, index, handlePosition + 3)));
                    setListWidths(Object.assign([], listWidths, (0, ($parcel$interopDefault($2Spwt$swchelperslib_define_propertyjs)))({}, index, handlePosition + 15)));
                }
            });
            updateDesc(handlePositions);
        }
    };
    var handlePosition1 = function(i) {
        handleHeight = 30 / totalHeight * 100;
        handleClearanceFactor = 0.5;
        heightClearance = handleClearanceFactor * handleHeight;
        handleDistance = handleHeight + heightClearance;
        handleHeightFirstToLast = (totalImages - 1) * handleDistance;
        return 50 + handleHeightFirstToLast / 2 - i * handleDistance;
    };
    (0, $2Spwt$react.useEffect)(function() {
        setHandlePositions(initialDimensions);
    }, [
        totalWidth,
        totalHeight
    ]);
    return /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("div", {
        className: "handles",
        children: Array(totalImages - 1).fill(0).map(function(_, i) {
            return /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("div", {
                ref: function(ref) {
                    return handleRefs.current[i] = ref;
                },
                onPointerDown: function(e) {
                    return onPointerDown(e, i);
                },
                onTouchStart: function(e) {
                    return touchStart(e, i);
                },
                className: "handle",
                style: {
                    zIndex: totalImages - 2 * i + zIndex,
                    left: "".concat(handlePositions[i], "px"),
                    top: "".concat(handlePosition1(i), "%")
                }
            }, i);
        })
    });
}
$6ed78c020e6666f8$export$e687473b8d6c8292.propTypes = {
    totalWidth: (0, ($parcel$interopDefault($2Spwt$proptypes))).number.isRequired,
    totalHeight: (0, ($parcel$interopDefault($2Spwt$proptypes))).number.isRequired,
    totalImages: (0, ($parcel$interopDefault($2Spwt$proptypes))).number.isRequired,
    zIndex: (0, ($parcel$interopDefault($2Spwt$proptypes))).number.isRequired,
    listWidths: (0, ($parcel$interopDefault($2Spwt$proptypes))).array.isRequired,
    setListWidths: (0, ($parcel$interopDefault($2Spwt$proptypes))).func.isRequired,
    updateDesc: (0, ($parcel$interopDefault($2Spwt$proptypes))).func
};


function $d23fa47777f53b91$export$b4fd821e44278c80(param1) {
    var imagePaths = param1.imagePaths, imageDescs = param1.imageDescs, zIndex = param1.zIndex;
    var textRefs = (0, $2Spwt$react.useRef)([]);
    var listRef = (0, $2Spwt$react.useRef)(null);
    var ref4 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(Array(imagePaths.length).fill(0)), 2), descLeft = ref4[0], setDescLeft = ref4[1];
    var ref1 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)([]), 2), listWidths = ref1[0], setListWidths = ref1[1];
    var ref2 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(0), 2), totalWidth = ref2[0], setTotalWidth = ref2[1];
    var ref3 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(0), 2), totalHeight = ref3[0], setTotalHeight = ref3[1];
    var initialListWidths = Array.from({
        length: imagePaths.length
    }, function(_, i) {
        return totalWidth / imagePaths.length * (i + 1);
    });
    var updateDesc = function(handlePositions) {
        setDescLeft(descLeft.map(function(_item, idx) {
            return textPosition(idx, handlePositions);
        }));
    };
    var textPosition = function(i, handlePositions) {
        var textWidth = textRefs.current[i].clientWidth;
        // first
        if (i === 0) return listWidths[i] / 2 - textWidth / 2;
        //last
        if (imagePaths.length - 1 === i) return (listWidths[i] + handlePositions[i - 1]) / 2 - textWidth / 2;
        // all others except first and last
        return (handlePositions[i - 1] + handlePositions[i]) / 2 - textWidth / 4;
    };
    (0, $2Spwt$react.useEffect)(function() {
        var listElement = listRef.current;
        var resizeObserver = new ResizeObserver(function(param) {
            var _param = (0, ($parcel$interopDefault($2Spwt$swchelperslib_to_arrayjs)))(param), entry = _param[0], _ = _param.slice(1);
            setTotalWidth(entry.target.getBoundingClientRect().width);
            setTotalHeight(entry.target.getBoundingClientRect().height);
        });
        resizeObserver.observe(listElement);
        return function() {
            return resizeObserver.disconnect();
        };
    }, []);
    (0, $2Spwt$react.useEffect)(function() {
        var initialDescPositions = descLeft.map(function(_item, i) {
            return totalWidth / imagePaths.length * (2 * i + 1) * 0.5 - textRefs.current[i].clientWidth / 2;
        });
        setDescLeft(initialDescPositions);
    }, [
        totalWidth
    ]);
    (0, $2Spwt$react.useEffect)(function() {
        setListWidths(initialListWidths);
    }, [
        totalWidth
    ]);
    return /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("ul", {
                className: "rmic",
                ref: listRef,
                children: imagePaths.map(function(image, i) {
                    return /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsxs)("li", {
                        style: {
                            zIndex: imagePaths.length - (2 * i + 1) + zIndex,
                            width: "".concat(listWidths[i], "px")
                        },
                        children: [
                            /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("img", {
                                src: image,
                                alt: "Alt",
                                style: {
                                    width: totalWidth
                                }
                            }),
                            imageDescs.length > 0 && /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("span", {
                                ref: function(ref) {
                                    return textRefs.current[i] = ref;
                                },
                                style: {
                                    left: "".concat(descLeft[i], "px")
                                },
                                children: imageDescs[i]
                            })
                        ]
                    }, i);
                })
            }),
            /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)((0, $6ed78c020e6666f8$export$e687473b8d6c8292), {
                totalWidth: totalWidth,
                totalHeight: totalHeight,
                listWidths: listWidths,
                setListWidths: setListWidths,
                updateDesc: updateDesc,
                totalImages: imagePaths.length,
                zIndex: zIndex
            })
        ]
    });
}
$d23fa47777f53b91$export$b4fd821e44278c80.defaultProps = {
    zIndex: 100,
    imageDescs: []
};
$d23fa47777f53b91$export$b4fd821e44278c80.propTypes = {
    imagePaths: (0, ($parcel$interopDefault($2Spwt$proptypes))).array.isRequired,
    imageDescs: (0, ($parcel$interopDefault($2Spwt$proptypes))).array,
    zIndex: (0, ($parcel$interopDefault($2Spwt$proptypes))).number
};


//# sourceMappingURL=main.js.map
