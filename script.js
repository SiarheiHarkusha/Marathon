const galeria = document.querySelectorAll('.photo')

for (const photo of galeria ) {
    photo.addEventListener('click', () => {
        clearActiveClasses()

    photo.classList.add('active')
    })
} 

function clearActiveClasses() {
    galeria.forEach((photo) => {
        photo.classList.remove('active')
    })
}



// function galeriaPlagin(activePhoto = 0) {
//     const galeria = document.querySelectorAll('.photo')

//     galeria[activePhoto].classList.add('active')

//     for (const photo of galeria ) {
//         photo.addEventListener('click', () => {
//             clearActiveClasses()

//         photo.classList.add('active')
//         })
//     } 

//     function clearActiveClasses() {
//         galeria.forEach((photo) => {
//             photo.classList.remove('active')
//         })
//     }
// }

// galeriaPlagin()