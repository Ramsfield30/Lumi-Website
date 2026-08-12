// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(13, 7, 20, 0.98)'
    navbar.style.boxShadow = '0 4px 32px rgba(0,0,0,0.4)'
  } else {
    navbar.style.background = 'rgba(13, 7, 20, 0.85)'
    navbar.style.boxShadow = 'none'
  }
})

// ── REVEAL ON SCROLL ──
const revealEls = document.querySelectorAll('.reveal')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible')
      }, index * 100)
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.1 })

revealEls.forEach(el => observer.observe(el))

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

// ── HERO CARDS TILT ON MOUSE MOVE (desktop only) ──
if (window.innerWidth > 768) {
  const cards = document.querySelectorAll('.profile-card')

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10
    const y = (e.clientY / window.innerHeight - 0.5) * 10

    cards.forEach((card, i) => {
      const factor = i === 0 ? 1 : -1
      card.style.transform = `rotateX(${y * factor * 0.5}deg) rotateY(${x * factor * 0.5}deg) translateY(${Math.sin(Date.now() / 1000) * 8}px)`
    })
  })
}

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active')
        }
      })
    }
  })
})