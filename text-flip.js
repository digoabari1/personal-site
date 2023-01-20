const flips = document.getElementsByClassName('flip')
const count = flips.length

const show = (num) => {
  for (hobby of flips) {
    hobby.classList.add("hide")
  }
  flips[num].classList.remove("hide")

  const next = num + 1 === count ? 0 : num + 1

  setTimeout(() =>{
    show(next)
  }, 2000)
}

show (0)
