import React, { useRef, useEffect } from 'react'
import initialQuestions from '../initialData'

function CanvasLines(props) {
  // CANVAS LIJNEN
  const canvas = useRef()
  let ctx = useRef()
  // let ctx = null

  const conceptL = initialQuestions[props.question].conceptsOfQ.length
  // const [conceptsLength, setConceptLength] = useState(0)
  // setConceptLength(conceptL)
  // console.log('conceptL:', conceptL)

  useEffect(() => {
    // dynamically assign the width and height to canvas

    setTimeout(() => {
      const canvasEle = canvas.current
      canvasEle.width = props.imgOneWidth && props.imgOneWidth
      canvasEle.height = props.imgOneHeight && props.imgOneHeight
      ctx = canvasEle.getContext('2d')
      // console.log('01 canvasEle.height:', canvasEle.height)
      // console.log('02 canvasEle.width:', canvasEle.width)

      const cc_1x = (props.questions[props.question].conceptsOfQ[0].X_c * canvasEle.width) / 100
      const cc_1y = (props.questions[props.question].conceptsOfQ[0].Y_c * canvasEle.height) / 100
      const p_1x = (props.questions[props.question].conceptsOfQ[0].X_t * canvasEle.width) / 100
      const p_1y = (props.questions[props.question].conceptsOfQ[0].Y_t * canvasEle.height) / 100
      drawLine({ x: cc_1x, y: cc_1y, x1: p_1x, y1: p_1y }, { color: 'black', width: 2 })

      if (conceptL > 1) {
        const cc_2x = (props.questions[props.question].conceptsOfQ[1].X_c * canvasEle.width) / 100
        const cc_2y = (props.questions[props.question].conceptsOfQ[1].Y_c * canvasEle.height) / 100
        const p_2x = (props.questions[props.question].conceptsOfQ[1].X_t * canvasEle.width) / 100
        const p_2y = (props.questions[props.question].conceptsOfQ[1].Y_t * canvasEle.height) / 100
        drawLine({ x: cc_2x, y: cc_2y, x1: p_2x, y1: p_2y }, { color: 'black', width: 2 })
      }

      if (conceptL > 2) {
        const cc_3x = (props.questions[props.question].conceptsOfQ[2].X_c * canvasEle.width) / 100
        const cc_3y = (props.questions[props.question].conceptsOfQ[2].Y_c * canvasEle.height) / 100
        const p_3x = (props.questions[props.question].conceptsOfQ[2].X_t * canvasEle.width) / 100
        const p_3y = (props.questions[props.question].conceptsOfQ[2].Y_t * canvasEle.height) / 100
        drawLine({ x: cc_3x, y: cc_3y, x1: p_3x, y1: p_3y }, { color: 'black', width: 2 })
      }
    }, 100)
  })

  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info
    const { color = 'black', width = 3 } = style
    // console.log('xxxx:', y1)
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x1, y1)
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.stroke()
  }
  // console.log('1 imgHeight:', props.imgOneHeight)
  // console.log('2 imgWidth:', props.imgOneWidth)
  // console.log('3 dropWrapperHeig:', props.dropWrapperHeight)

  const styleCanvas = () => {
    return {
      left: (props.dropWrapperWidth - props.imgOneWidth) / 2,
      top: (props.dropWrapperHeight - props.imgOneHeight) / 2,
      height: props.imgOneHeight,
      width: props.imgOneWidth,
      // border: '1px solid rgb(0, 255, 21)',
      // backgroundColor: 'red',
    }
  }

  return <canvas style={styleCanvas()} ref={canvas} className="canvasLines"></canvas>
}

export default CanvasLines
