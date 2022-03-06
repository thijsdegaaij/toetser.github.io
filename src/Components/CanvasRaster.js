import React, { useState, useRef, useEffect } from 'react'

function CanvasRaster(e) {
  // CANVAS RASTER
  const canvasRaster = useRef()
  let ctxR = null

  const givePosition = (e) => {
    var rectCanvas = canvasRaster.getBoundingClientRect()
    var positionX = Math.round(((e.clientX - rectCanvas.left) / canvasRaster.width) * 100 * 1000) / 1000
    var positionY = Math.round(((e.clientY - rectCanvas.top) / canvasRaster.height) * 100 * 1000) / 1000
    //alert(positionX + ", " + positionY);

    alert(
      'Width\nPosition: ' + (e.clientX - rectCanvas.left) + '\nPercentage Position: ' + positionX + '\nBack to position: '
      //  + percentToPxHor(positionX)
    )
  }

  // useEffect(() => {
  //   // dynamically assign the width and height to canvas
  //   const canvasRast = canvasRaster.current
  //   canvasRast.width = canvasRast.clientWidth
  //   canvasRast.height = canvasRast.clientHeight
  //   const canvasRasWidth = canvasRast.width
  //   const canvasRasHeigth = canvasRast.height
  //   ctxR = canvasRast.getContext('2d')

  //   const rasterpunten = [10, 30, 50, 70, 90]
  //   rasterpunten.map((punt) => {
  //     const puntX = (canvasRasWidth * punt) / 100
  //     const puntY = (canvasRasHeigth * punt) / 100
  //     drawLineRaster({ x: puntX, y: 0, x1: puntX, y1: canvasRasHeigth }, { color: 'blue', width: 0.1 })
  //     drawLineRaster({ x: 0, y: puntY, x1: canvasRasWidth, y1: puntY }, { color: 'blue', width: 0.1 })
  //     console.log('30')
  //   })
  //   const rasterpunten5 = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95]
  //   rasterpunten5.map((punt) => {
  //     const puntX = (canvasRasWidth * punt) / 100
  //     const puntY = (canvasRasHeigth * punt) / 100
  //     drawLineRaster({ x: puntX, y: 0, x1: puntX, y1: canvasRasHeigth }, { color: 'gray', width: 1 })
  //     drawLineRaster({ x: 0, y: puntY, x1: canvasRasWidth, y1: puntY }, { color: 'gray', width: 1 })
  //     console.log('15')
  //   })
  //   const rasterpunten20 = [20, 40, 60, 80]
  //   rasterpunten20.map((punt) => {
  //     const puntX = (canvasRasWidth * punt) / 100
  //     const puntY = (canvasRasHeigth * punt) / 100
  //     drawLineRaster({ x: puntX, y: 0, x1: puntX, y1: canvasRasHeigth }, { color: 'gray', width: 0.02 })
  //     drawLineRaster({ x: 0, y: puntY, x1: canvasRasWidth, y1: puntY }, { color: 'gray', width: 0.02 })
  //     console.log('20')
  //   })
  // }, [])

  // const drawLineRaster = (info, style = {}) => {
  //   const { x, y, x1, y1 } = info
  //   const { color = 'grey', width = 3 } = style
  //   ctxR.beginPath()
  //   ctxR.moveTo(x, y)
  //   ctxR.lineTo(x1, y1)
  //   ctxR.strokeStyle = color
  //   ctxR.lineWidth = width
  //   ctxR.stroke()
  // }

  return <canvas ref={canvasRaster} className="canvasRaster" onClick={givePosition(e)}></canvas>
}

export default CanvasRaster
