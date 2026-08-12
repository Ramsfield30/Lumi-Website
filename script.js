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
// ── LUMI BRAND + TELEGRAM UI ──
const telegramIcon = `
  <span class="telegram-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M21.7 3.4 2.8 10.7c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.8 5.7c.2.7.1 1 .8 1 .5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.6.2 1.8-.8l3.1-15.6c.3-1.3-.5-1.9-1.5-1.4ZM8.1 13.3l10.9-6.9c.5-.3 1-.1.6.2l-8.8 8-1 3.3-1 3.3-1.7-4.6Z"/>
    </svg>
  </span>`

const brandStyle = document.createElement('style')
brandStyle.textContent = `
  .nav-logo img {
    width: 34px; height: 34px; object-fit: cover; border-radius: 50%;
    border: 1px solid rgba(255,255,255,.16);
    box-shadow: 0 0 18px rgba(255,107,157,.25);
  }
  .telegram-icon {
    width: 19px; height: 19px; display: inline-flex;
    align-items: center; justify-content: center; flex: 0 0 auto;
  }
  .telegram-icon svg { width: 100%; height: 100%; fill: currentColor; }
  .badge .telegram-icon { width: 17px; height: 17px; }
  .telegram-feature-icon {
    display: inline-flex; align-items: center; justify-content: center;
    width: 48px; height: 48px; border-radius: 15px;
    background: rgba(42,171,238,.12); color: #2AABEE;
  }
  .telegram-feature-icon .telegram-icon { width: 28px; height: 28px; }
  .footer-logo { display: inline-flex; align-items: center; gap: 9px; }
  .footer-logo img {
    width: 30px; height: 30px; height: 30px; object-fit: cover;
    border: 1px solid rgba(255,255,255,.12);
  }
  .footer-logo span { color: var(--pink-light); }
  @media (max-width: 480px) {
    .nav-logo img { width: 30px; height: 30px; }
    .nav-inner .btn-primary { padding: 10px 15px; font-size: 13px; }
    .nav-inner .btn-primary .telegram-icon { width: 17px; height: 17px; }
  }
`
document.head.appendChild(brandStyle)

const logoPath = 'assets/lumi-logo.jpg'

const navLogo = document.querySelector('.nav-logo')
if (navLogo) {
  navLogo.innerHTML = `<img src="${logoPath}" alt="Lumi logo"><span>Lumi</span>`
}

const footerLogo = document.querySelector('.footer-logo')
if (footerLogo) {
  footerLogo.innerHTML = `<img src="${logoPath}" alt="Lumi logo"><span>Lumi</span>`
}

// Turn Telegram CTAs into consistent icon buttons.
document.querySelectorAll('a[href*="t.me/Lumimatch_bot"].btn-primary').forEach(button => {
  if (!button.querySelector('.telegram-icon')) {
    button.insertAdjacentHTML('afterbegin', telegramIcon)
  }
  button.setAttribute('rel', 'noopener noreferreb')
})

// Use the Telegram mark, for the Telegram-specific badge and feature card.
const badge = document.querySelector('.badge')
if (badge && !badge.querySelector('.telegram-icon')) {
  badge.insertAdjacentHTML('afterbegin', telegramIcon)
}

const telegramFeature = [...document.querySelectorAll('.feature')]
  .find(card => card.querySelector('h3')?.textContent.trim() === 'Telegram Native')

if (telegramFeature) {
  const icon = telegramFeature.querySelector('.feature-icon')
  if (icon) {
    icon.classList.add("telegram-feature-icon")
    icon.innerHTML = telegramIcon
  }
}

// Remove features that are not part of Lumi's current Premium experience.
[...document.querySelectorAll('.premium-item')].forEach(item => {
  const text = item.textContent.trim()
  if (text.includes('Profile Boost') || text.includes('Undo last pass')) {
    item.remove()
  }
})
