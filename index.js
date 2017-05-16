const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    return colorDiv
}

//make the italized name
const createName = (personName) => {
    const name = document.createElement('em')
    name.textContent = personName
    return name
}

const handleSubmit = ev => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    //get items from the form
    const formItems = form.elements;

    //create unordered list
    const ul = document.createElement('ul')
    details.appendChild(ul)

    let newElement

    //add elements from form into unordered list
    for(let i = 0;i < formItems.length - 1;i++){
        newElement = document.createElement('li')
        switch(formItems[i].name) { //set content of list item based on name
            case 'hairColor' :
                newElement.textContent = 'Color:' 
                newElement.appendChild(renderColor(formItems[i].value))
                break;
            case 'personName' :
                newElement.textContent = 'Name: ' 
                newElement.appendChild(createName(formItems[i].value))
                break;
            case 'age' :
                newElement.textContent = `Age: ${formItems[i].value}`
                break;
            case 'birthplace' :
                newElement.textContent = `BirthPlace: ${formItems[i].value}`
                break;
        }
        
        ul.appendChild(newElement)
    }

}

personForm.addEventListener('submit',handleSubmit)