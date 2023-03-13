interface Props {
  width: number
  height: number
}
export const randomCell = (props: Props) => {
  const { width, height } = props
  const result = Array.from(Array(width * height), () => Math.random() < 0.2)
    .map((v, i) => {
      const h = Math.trunc(i / width)
      const w = i - h * width
      return { w, h, v }
    })
    .filter(({ v }) => v)
    .map(({ w, h }) => ({ width: w, height: h }))
  return result
}

export const getRandomArrow = (props: Props) => {
  const { width, height } = props
  const _h = Math.floor(Math.random() * height)
  const isLeft = Math.random() > 0.5
  if (isLeft) {
    return Array.from(Array(5), (_, i) => {
      const result = {
        width: 2,
        height: _h,
      }

      switch (i) {
        case 1:
          result.width = result.width + 1
          break
        case 2:
          result.width = result.width + 2
          break
        case 3:
          result.width = result.width + 2
          result.height = result.height + 1
          break
        case 4:
          result.width = result.width + 1
          result.height = result.height + 2
          break
      }
      return result
    })
  }
  return Array.from(Array(5), (_, i) => {
    const result = {
      width: width - 4,
      height: _h,
    }

    switch (i) {
      case 1:
        result.width = result.width + 1
        break
      case 2:
        result.width = result.width + 2
        break
      case 3:
        result.height = result.height + 1
        break
      case 4:
        result.width = result.width + 1
        result.height = result.height + 2
        break
    }
    return result
  })
}
export const getArrow = (x: number, y: number) => {
  const isLeft = Math.random() > 0.5
  if (isLeft) {
    return Array.from(Array(5), (_, i) => {
      const result = {
        width: Math.max(x, 2),
        height: y,
      }

      switch (i) {
        case 1:
          result.width = result.width + 1
          break
        case 2:
          result.width = result.width + 2
          break
        case 3:
          result.width = result.width + 2
          result.height = result.height + 1
          break
        case 4:
          result.width = result.width + 1
          result.height = result.height + 2
          break
      }
      return result
    })
  }
  return Array.from(Array(5), (_, i) => {
    const result = {
      width: x,
      height: y,
    }

    switch (i) {
      case 1:
        result.width = result.width + 1
        break
      case 2:
        result.width = result.width + 2
        break
      case 3:
        result.height = result.height + 1
        break
      case 4:
        result.width = result.width + 1
        result.height = result.height + 2
        break
    }
    return result
  })
}
export const getInitialCell = (props: Props, arrowOnly?: boolean) => {
  // return randomCell(props)
  const { width, height } = props
  if (width < 14 || height < 10) return randomCell(props)

  const posisition = Math.floor(Math.random() * 3)
  const facePositionUp = posisition + 2
  const facePositionRight = posisition + 2
  const faceA = Array.from(Array(4), (_, i) => {
    const result = { height: facePositionUp, width: facePositionRight }
    switch (i) {
      case 0:
        result.width = width - result.width - 2
        break
      case 1:
        result.width = width - result.width - 3
        break
      case 2:
        result.width = width - result.width - 11
        break
      case 3:
        result.width = width - result.width - 12
        break
    }

    return result
  })
  const faceB = Array.from(Array(7), (_, i) => {
    const result = { height: facePositionUp + 1, width: facePositionRight }
    switch (i) {
      case 0:
        result.width = width - result.width - 1
        break
      case 1:
        result.width = width - result.width - 4
        break
      case 2:
        result.width = width - result.width - 6
        break
      case 3:
        result.width = width - result.width - 7
        break
      case 4:
        result.width = width - result.width - 8
        break
      case 5:
        result.width = width - result.width - 10
        break
      case 6:
        result.width = width - result.width - 13
        break
    }
    return result
  })

  const faceC = faceA.map((v) => ({ ...v, height: v.height + 2 }))
  const face = [...faceA, ...faceB, ...faceC]
  const faceHitPoint = {
    width:
      face.sort((a, b) => b.width - a.width)[0].width -
      Math.floor(Math.random() * 9),
    height: face.sort((a, b) => a.height - b.height)[0].height,
  }
  const arrowPoint = {
    width:
      faceHitPoint.width + faceHitPoint.height - height < 0
        ? 0
        : faceHitPoint.width + faceHitPoint.height - height - 1,
    height:
      height - faceHitPoint.width < 0
        ? height - 6
        : faceHitPoint.width + faceHitPoint.height,
  }
  const arrow = Array.from(Array(5), (_, i) => {
    const result = { ...arrowPoint }
    switch (i) {
      case 1:
        result.width = arrowPoint.width + 1
        break
      case 2:
        result.width = arrowPoint.width + 2
        break
      case 3:
        result.width = arrowPoint.width + 2
        result.height = arrowPoint.height + 1
        break
      case 4:
        result.width = arrowPoint.width + 1
        result.height = arrowPoint.height + 2
        break
    }

    return result
  })
  if (arrowOnly) return arrow
  return [...face, ...arrow]
}
