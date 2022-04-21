const boxes = document.querySelectorAll('.image-container')
const popupContainer = document.querySelector('.popup-container')
const popupInner = document.querySelector('.popup-inner')
const popupSide = document.querySelector('.side')

for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i];
    const bg = element.parentElement.parentElement.parentElement
    element.addEventListener('click', function() {
        popupInner.style.backgroundColor = window.getComputedStyle(bg).backgroundColor
        popupContainer.style.display = 'flex'
        
        const img = document.createElement('img')
        img.setAttribute('src', element.children[0].getAttribute('src'))
        popupInner.appendChild(img)

        const title = document.createElement('h3')
        title.innerHTML = element.getAttribute('title')
        popupSide.appendChild(title)

        const description1 = document.createElement('div')
        description1.className = 'description'
        description1.innerHTML = element.getAttribute('description-1')
        popupSide.appendChild(description1)

        const description2 = document.createElement('div')
        description2.className = 'description'
        description2.innerHTML = element.getAttribute('description-2')
        popupSide.appendChild(description2)
    })
}

const hidePopup = () => {
    popupContainer.style.display = 'none'
    popupInner.children[2].remove()
    popupSide.innerHTML = ''
}