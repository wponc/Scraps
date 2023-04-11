const sections = document.querySelectorAll('.section')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
  }, {
  threshold: .01,
  }
)

sections.forEach(section => {
    observer.observe(section)
  })