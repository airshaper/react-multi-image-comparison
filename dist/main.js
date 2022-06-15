var $6JvG5$reactjsxruntime = require("react/jsx-runtime");
var $6JvG5$react = require("react");
var $6JvG5$proptypes = require("prop-types");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "ReactMultiImageComparison", () => $1866e25f18db3eb9$export$b4fd821e44278c80);





function $fffd771b354e8c28$export$3e431a229df88919({ ...props }) {
    return /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)("img", {
        ...props
    });
}
$fffd771b354e8c28$export$3e431a229df88919.propTypes = {
    src: (0, ($parcel$interopDefault($6JvG5$proptypes))).object.isRequired
};





function $b5ba15e76edec701$export$e687473b8d6c8292({ totalWidth: totalWidth , totalHeight: totalHeight , totalImages: totalImages , zIndex: zIndex , listRefs: listRefs , updateDesc: updateDesc ,  }) {
    const [currentHandle, setCurrentHandle] = (0, $6JvG5$react.useState)(null);
    const handleRefs = (0, $6JvG5$react.useRef)([]);
    const handleRef = (0, $6JvG5$react.useRef)([]);
    (0, $6JvG5$react.useEffect)(()=>{
        document.addEventListener("mousemove", moveEvent);
        document.addEventListener("mouseup", onEnd);
        document.addEventListener("touchend", onEnd);
        document.addEventListener("touchmove", moveEvent);
        return ()=>{
            document.removeEventListener("mousemove", moveEvent);
            document.removeEventListener("mouseup", onEnd);
            document.removeEventListener("touchend", onEnd);
            document.removeEventListener("touchmove", moveEvent);
        };
    });
    const onMouseDown = (e, i)=>{
        setCurrentHandle(i);
        handleRefs.current[i].offset = e.pageX - handleRefs.current[i].offsetLeft;
    };
    const onEnd = (e)=>{
        setCurrentHandle(null);
    };
    const touchStart = (e, i)=>{
        setCurrentHandle(i);
        handleRefs.current[i].offset = e.pageX - handleRefs.current[i].offsetLeft;
    };
    const moveEvent = (e)=>{
        if (currentHandle !== null) {
            if (e.changedTouches) e = e.changedTouches[0];
            let handle = handleRefs.current[currentHandle];
            const handlePosition = Math.min(Math.max(e.clientX - handle.offset, 0 - handle.clientWidth / 2), totalWidth - handle.clientWidth / 2);
            const elementPosition = handlePosition + handle.clientWidth / 2;
            handle.style.left = `${handlePosition}px`;
            listRefs.current[currentHandle].style.width = `${elementPosition}px`;
            handleRefs.current.forEach((h, index)=>{
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
    const topPosition = (i)=>{
        handleHeight = 30 / totalHeight * 100;
        handleClearanceFactor = 0.5;
        heightClearance = handleClearanceFactor * handleHeight;
        handleDistance = handleHeight + heightClearance;
        handleHeightFirstToLast = (totalImages - 1) * handleDistance;
        return 50 + handleHeightFirstToLast / 2 - i * handleDistance;
    };
    return /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)("div", {
        className: "handles",
        ref: handleRef,
        children: Array(totalImages - 1).fill(0).map((_, i)=>/*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)("div", {
                ref: (ref)=>handleRefs.current[i] = ref,
                onMouseDown: (e)=>onMouseDown(e, i),
                onTouchStart: (e)=>touchStart(e, i),
                className: "handle",
                style: {
                    zIndex: totalImages - 2 * i + zIndex,
                    left: `${totalWidth / totalImages * (i + 1) - 15}px`,
                    top: `${topPosition(i)}%`
                }
            }, i))
    });
}
Image.propTypes = {
    totalWidth: (0, ($parcel$interopDefault($6JvG5$proptypes))).number.isRequired,
    totalHeight: (0, ($parcel$interopDefault($6JvG5$proptypes))).number.isRequired,
    totalImages: (0, ($parcel$interopDefault($6JvG5$proptypes))).number.isRequired,
    zIndex: (0, ($parcel$interopDefault($6JvG5$proptypes))).number.isRequired,
    updateDesc: (0, ($parcel$interopDefault($6JvG5$proptypes))).func
};


function $1866e25f18db3eb9$export$b4fd821e44278c80({ imagePaths: imagePaths , imageDescs: imageDescs , zIndex: zIndex  }) {
    const listRefs = (0, $6JvG5$react.useRef)([]);
    // const listRef = useRef();
    const [descLeft, setDescLeft] = (0, $6JvG5$react.useState)(Array(imagePaths.length).fill(0));
    const [totalWidth, setTotalWidth] = (0, $6JvG5$react.useState)(0);
    const [totalHeight, setTotalHeight] = (0, $6JvG5$react.useState)(0);
    const listRef = (0, $6JvG5$react.useCallback)((node)=>{
        if (node !== null) {
            setTotalWidth(node.clientWidth);
            setTotalHeight(node.clientHeight);
        }
    }, []);
    const updateDesc = (handleRefs)=>{
        let updated = descLeft.map((_item, idx)=>textPosition(idx, handleRefs));
        setDescLeft(updated);
    };
    const textPosition = (i, handleRefs)=>{
        const textWidth = listRefs.current[i].lastChild.clientWidth;
        // first
        if (i === 0) return listRefs.current[0].clientWidth / 2 - textWidth / 2;
        //last
        if (imagePaths.length - 1 === i) return (listRefs.current[i].clientWidth + handleRefs.current[i - 1].offsetLeft) / 2 - textWidth / 2;
        // all others except first and last
        return (handleRefs.current[i - 1].offsetLeft + handleRefs.current[i].offsetLeft) / 2 - textWidth / 4;
    };
    (0, $6JvG5$react.useEffect)(()=>{
        let initialDescPositions = descLeft.map((_item, i)=>totalWidth / imagePaths.length * (2 * i + 1) * 0.5 - listRefs.current[i].lastChild.clientWidth / 2);
        setDescLeft(initialDescPositions);
    }, [
        totalWidth
    ]);
    return /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)("ul", {
                className: "rmic",
                ref: listRef,
                children: imagePaths.map((image, i)=>/*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsxs)("li", {
                        ref: (ref)=>listRefs.current[i] = ref,
                        style: {
                            zIndex: imagePaths.length - (2 * i + 1) + zIndex,
                            width: `${totalWidth / imagePaths.length * (i + 1)}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)((0, $fffd771b354e8c28$export$3e431a229df88919), {
                                src: image,
                                alt: "Alt",
                                style: {
                                    width: totalWidth
                                }
                            }),
                            imageDescs.length > 0 && /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)("span", {
                                style: {
                                    left: `${descLeft[i]}px`
                                },
                                children: imageDescs[i]
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ (0, $6JvG5$reactjsxruntime.jsx)((0, $b5ba15e76edec701$export$e687473b8d6c8292), {
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
$1866e25f18db3eb9$export$b4fd821e44278c80.defaultProps = {
    zIndex: 100,
    imageDescs: []
};
$1866e25f18db3eb9$export$b4fd821e44278c80.propTypes = {
    imagePaths: (0, ($parcel$interopDefault($6JvG5$proptypes))).array.isRequired,
    imageDescs: (0, ($parcel$interopDefault($6JvG5$proptypes))).array,
    zIndex: (0, ($parcel$interopDefault($6JvG5$proptypes))).number
};


//# sourceMappingURL=main.js.map
