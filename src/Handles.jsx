import { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

export function Handles({
  totalWidth,
  totalHeight,
  totalImages,
  zIndex,
  listWidths,
  setListWidths,
  updateDesc,
}) {
  const initialDimensions = Array.from(
    { length: totalImages - 1 },
    (_, i) => (totalWidth / totalImages) * (i + 1) - 30 / 2
  )

  const handleRefs = useRef([])
  const [activeHandle, setActiveHandle] = useState(null)
  const [handlePositions, setHandlePositions] = useState(initialDimensions)
  const [handleOffsets, setHandleOffsets] = useState(
    Array(totalImages - 1).fill(0)
  )

  useEffect(() => {
    document.addEventListener("pointermove", moveEvent)
    document.addEventListener("pointerup", onEnd)
    document.addEventListener("touchend", onEnd)
    document.addEventListener("touchmove", moveEvent)

    return () => {
      document.removeEventListener("pointermove", moveEvent)
      document.removeEventListener("pointerup", onEnd)
      document.removeEventListener("touchend", onEnd)
      document.removeEventListener("touchmove", moveEvent)
    }
  })

  const onPointerDown = (e, i) => {
    setActiveHandle(i)
    setHandleOffsets(
      Object.assign([], handleOffsets, {
        [i]: e.pageX - handleRefs.current[i].offsetLeft,
      })
    )
  }
  const onEnd = (e) => {
    setActiveHandle(null)
  }
  const touchStart = (e, i) => {
    setActiveHandle(i)
    setHandleOffsets(
      Object.assign([], handleOffsets, {
        [i]: e.pageX - handleRefs.current[i].offsetLeft,
      })
    )
  }

  const moveEvent = (e) => {
    if (activeHandle !== null) {
      let handle = handleRefs.current[activeHandle]
      const handlePosition = Math.min(
        Math.max(
          e.touches
            ? e.touches[0].clientX
            : e.clientX - handleOffsets[activeHandle],
          0 - handle.clientWidth / 2
        ),
        totalWidth - handle.clientWidth / 2
      )

      setListWidths(
        Object.assign([], listWidths, {
          [activeHandle]: handlePosition + handle.clientWidth / 2,
        })
      )

      setHandlePositions(
        Object.assign([], handlePositions, {
          [activeHandle]: handlePosition,
        })
      )

      handlePositions.forEach((h, index) => {
        if (activeHandle > index && handle.offsetLeft <= h) {
          setHandlePositions(
            Object.assign([], handlePositions, {
              [index]: handlePosition - 3,
            })
          )

          setListWidths(
            Object.assign([], listWidths, {
              [index]: handlePosition + 15,
            })
          )
        }

        if (activeHandle < index && handle.offsetLeft >= h) {
          setHandlePositions(
            Object.assign([], handlePositions, {
              [index]: handlePosition + 3,
            })
          )
          setListWidths(
            Object.assign([], listWidths, {
              [index]: handlePosition + 15,
            })
          )
        }
      })

      updateDesc(handlePositions)
    }
  }

  const handlePosition = (i) => {
    const handleHeight = (30 / totalHeight) * 100

    const handleClearanceFactor = 0.5
    const heightClearance = handleClearanceFactor * handleHeight
    const handleDistance = handleHeight + heightClearance

    const handleHeightFirstToLast = (totalImages - 1) * handleDistance

    return 50 + handleHeightFirstToLast / 2 - i * handleDistance
  }

  useEffect(() => {
    setHandlePositions(initialDimensions)
  }, [totalWidth, totalHeight])

  return (
    <div className="handles">
      {Array(totalImages - 1)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            ref={(ref) => (handleRefs.current[i] = ref)}
            onPointerDown={(e) => onPointerDown(e, i)}
            onTouchStart={(e) => touchStart(e, i)}
            className="handle"
            style={{
              zIndex: totalImages - 2 * i + zIndex,
              left: `${handlePositions[i]}px`,
              top: `${handlePosition(i)}%`,
            }}
          ></div>
        ))}
    </div>
  )
}

Handles.propTypes = {
  totalWidth: PropTypes.number.isRequired,
  totalHeight: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  listWidths: PropTypes.array.isRequired,
  setListWidths: PropTypes.func.isRequired,
  updateDesc: PropTypes.func,
}
