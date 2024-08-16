const modal = document.querySelectorAll('.modal'),
    cardBtun = document.querySelectorAll('.card__product'),
    modalCLose = document.querySelectorAll('.modal__close'),
    modalCard = document.querySelectorAll('.modal__card')

let activeModal = (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

cardBtun.forEach((cardBtun, i) => {
    cardBtun.addEventListener('click', () => {
        activeModal(i)
    })
})


modalCLose.forEach((modalCLose) => {
    modalCLose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('active-modal')
    })
})

modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) => {
        e.stopPropagation()
    })
})