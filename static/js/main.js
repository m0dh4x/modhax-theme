const sectionTitles = document.querySelectorAll('.section h3')

sectionTitles.forEach((sectionTitle) => {
  
  const chars = sectionTitle.innerHTML.split('')
  sectionTitle.textContent = ''

  chars.forEach( (char, key)=> {
    const span = document.createElement('span')
    sectionTitle.appendChild(span)
    span.style = `--char-idx: ${key};`
    span.textContent = char
  })
})

const targetEl = document.querySelectorAll('section')

const options = {
  threshold: 0.1
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('foo')
      observer.unobserve(entry.target)
    }
  })
}, options);


targetEl.forEach(el => {
  observer.observe(el)
})