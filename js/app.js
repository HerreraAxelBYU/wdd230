const years = new Date()
const last = new Date(document.lastModified)

document.querySelector('.year').innerHTML = years.getFullYear()
document.querySelector('.date').innerHTML = last