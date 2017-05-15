const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    return colorDiv
}

const handleSubmit = ev => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value

    const em = document.createElement('em')
    em.textContent = personName;

    const colorDiv = renderColor(hairColor)

    const ul = document.createElement('ul')
    const item1 = document.createElement('li')
    const item2 = document.createElement('li')
    
    item1.textContent = form.age.value
    item2.textContent = form.birthplace.value

    details.appendChild(em)
    details.appendChild(colorDiv)
    details.appendChild(ul)
    ul.appendChild(item1)
    ul.appendChild(item2)
}

personForm.onsubmit = handleSubmit