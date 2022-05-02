export function giveThijs() {
  const thijs = 2
  return thijs
}

export function giveimgOneWidthW() {
  let img = new Image()
  img.onload = function () {
    alert(this.width)
  }
  // img.src = document.getElementById('imageOne_img').src
}

export function giveimgOneWidthW_old() {
  let img = new Image()
  img = document.getElementById('imageOne_img')
  if (img !== null) {
    return img.src
  }
}
