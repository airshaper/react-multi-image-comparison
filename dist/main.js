var $2Spwt$swchelperslib_sliced_to_arrayjs = require("@swc/helpers/lib/_sliced_to_array.js");
var $2Spwt$swchelperslib_to_arrayjs = require("@swc/helpers/lib/_to_array.js");
var $2Spwt$reactjsxruntime = require("react/jsx-runtime");
var $2Spwt$react = require("react");
var $2Spwt$proptypes = require("prop-types");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ReactMultiImageComparison", function () { return $d23fa47777f53b91$export$b4fd821e44278c80; });









function $6ed78c020e6666f8$export$e687473b8d6c8292(param) {
    var totalWidth = param.totalWidth, totalHeight = param.totalHeight, totalImages = param.totalImages, zIndex = param.zIndex, listRefs = param.listRefs, updateDesc = param.updateDesc;
    var ref1 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(null), 2), currentHandle = ref1[0], setCurrentHandle = ref1[1];
    var handleRefs = (0, $2Spwt$react.useRef)([]);
    var handleRef = (0, $2Spwt$react.useRef)([]);
    (0, $2Spwt$react.useEffect)(function() {
        document.addEventListener("mousemove", moveEvent);
        document.addEventListener("mouseup", onEnd);
        document.addEventListener("touchend", onEnd);
        document.addEventListener("touchmove", moveEvent);
        return function() {
            document.removeEventListener("mousemove", moveEvent);
            document.removeEventListener("mouseup", onEnd);
            document.removeEventListener("touchend", onEnd);
            document.removeEventListener("touchmove", moveEvent);
        };
    });
    var onMouseDown = function(e, i) {
        setCurrentHandle(i);
        handleRefs.current[i].offset = e.pageX - handleRefs.current[i].offsetLeft;
    };
    var onEnd = function(e) {
        setCurrentHandle(null);
    };
    var touchStart = function(e, i) {
        setCurrentHandle(i);
        handleRefs.current[i].offset = e.pageX - handleRefs.current[i].offsetLeft;
    };
    var moveEvent = function(e) {
        if (currentHandle !== null) {
            var handle = handleRefs.current[currentHandle];
            var handlePosition = Math.min(Math.max(e.touches ? e.touches[0].clientX : e.clientX - handle.offset, 0 - handle.clientWidth / 2), totalWidth - handle.clientWidth / 2);
            var elementPosition = handlePosition + handle.clientWidth / 2;
            handle.style.left = "".concat(handlePosition, "px");
            listRefs.current[currentHandle].style.width = "".concat(elementPosition, "px");
            handleRefs.current.forEach(function(h, index) {
                if (currentHandle > index && handle.offsetLeft <= h.offsetLeft) {
                    h.style.left = "".concat(handlePosition, "px");
                    listRefs.current[index].style.width = "".concat(handlePosition + 15, "px");
                }
                if (currentHandle < index && handle.offsetLeft >= h.offsetLeft) {
                    h.style.left = "".concat(handlePosition, "px");
                    listRefs.current[index].style.width = "".concat(handlePosition + 15, "px");
                }
            });
            updateDesc(handleRefs);
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
    return /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("div", {
        className: "handles",
        ref: handleRef,
        children: Array(totalImages - 1).fill(0).map(function(_, i) {
            return /*#__PURE__*/ (0, $2Spwt$reactjsxruntime.jsx)("div", {
                ref: function(ref) {
                    return handleRefs.current[i] = ref;
                },
                onMouseDown: function(e) {
                    return onMouseDown(e, i);
                },
                onTouchStart: function(e) {
                    return touchStart(e, i);
                },
                className: "handle",
                style: {
                    zIndex: totalImages - 2 * i + zIndex,
                    left: "".concat(totalWidth / totalImages * (i + 1) - 15, "px"),
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
    updateDesc: (0, ($parcel$interopDefault($2Spwt$proptypes))).func
};


function $d23fa47777f53b91$export$b4fd821e44278c80(param1) {
    var imagePaths = param1.imagePaths, imageDescs = param1.imageDescs, zIndex = param1.zIndex;
    var listRefs = (0, $2Spwt$react.useRef)([]);
    var listRef = (0, $2Spwt$react.useRef)(null);
    var ref3 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(Array(imagePaths.length).fill(0)), 2), descLeft = ref3[0], setDescLeft = ref3[1];
    var ref1 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(0), 2), totalWidth = ref1[0], setTotalWidth = ref1[1];
    var ref2 = (0, ($parcel$interopDefault($2Spwt$swchelperslib_sliced_to_arrayjs)))((0, $2Spwt$react.useState)(0), 2), totalHeight = ref2[0], setTotalHeight = ref2[1];
    var updateDesc = function(handleRefs) {
        var updated = descLeft.map(function(_item, idx) {
            return textPosition(idx, handleRefs);
        });
        setDescLeft(updated);
    };
    var textPosition = function(i, handleRefs) {
        var textWidth = listRefs.current[i].lastChild.clientWidth;
        // first
        if (i === 0) return listRefs.current[0].clientWidth / 2 - textWidth / 2;
        //last
        if (imagePaths.length - 1 === i) return (listRefs.current[i].clientWidth + handleRefs.current[i - 1].offsetLeft) / 2 - textWidth / 2;
        // all others except first and last
        return (handleRefs.current[i - 1].offsetLeft + handleRefs.current[i].offsetLeft) / 2 - textWidth / 4;
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
            return totalWidth / imagePaths.length * (2 * i + 1) * 0.5 - listRefs.current[i].lastChild.clientWidth / 2;
        });
        setDescLeft(initialDescPositions);
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
                        ref: function(ref) {
                            return listRefs.current[i] = ref;
                        },
                        style: {
                            zIndex: imagePaths.length - (2 * i + 1) + zIndex,
                            width: "".concat(totalWidth / imagePaths.length * (i + 1), "px")
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
                listRefs: listRefs,
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
