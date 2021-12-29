const themeBtn = document.getElementById('theme-btn')
const codeSpoiler = document.querySelector('.code-spoiler-close')
const codeContainer = document.querySelector('.code-description')
const burgerBtn = document.querySelector('.burger')
const burgerIcon = document.querySelector('.uil-bars')
const menu = document.querySelector('.menu')
const skills = document.querySelectorAll('.skills-progress')

themeBtn.addEventListener('click', (e) => {
  document.body.classList.toggle('dark-theme')
  themeBtn.classList.toggle('uil-sun')
})

codeSpoiler.addEventListener('click', (e) => {
  codeSpoiler.classList.toggle('code-spoiler-open')
  codeSpoiler.classList.toggle('code-spoiler-close')
  codeContainer.classList.toggle('opened')
})

burgerBtn.addEventListener('click', (e) => {
  burgerIcon.classList.toggle('uil-times')
  menu.classList.toggle('closed')
  menu.classList.toggle('opened')
})

if (document.documentElement.clientWidth < 767) {
  menu.classList.toggle('closed')
  menu.classList.toggle('opened')
}

window.addEventListener(
  `resize`,
  (event) => {
    if (document.documentElement.clientWidth < 767) {
      menu.classList.add('closed')
      menu.classList.remove('opened')
      burgerIcon.classList.remove('uil-times')
      burgerIcon.classList.add('uil-bars')
    } else {
      menu.classList.remove('closed')
      menu.classList.add('opened')
      burgerIcon.classList.add('uil-times')
      burgerIcon.classList.remove('uil-bars')
    }
  },
  false
)

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skills.forEach((skill) => {
          skill.classList.add('active')
        })
      } else {
        skills.forEach((skill) => {
          skill.classList.remove('active')
        })
      }
    })
  },
  {
    threshold: 0.5,
  }
)

observer.observe(document.querySelector('.skills-container'))
