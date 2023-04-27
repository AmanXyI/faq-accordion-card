const toggleBtn = document.querySelectorAll('.dropdown-img')
const boxEl = document.querySelector('.box')


toggleBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const item = e.currentTarget.parentElement.parentElement
        if (item.classList.contains('active')) {
            item.classList.remove('active')
            boxEl.classList.remove('active')
            e.currentTarget.classList.remove('active')
        } else {
            toggleBtn.forEach((btn) => {
                btn.classList.remove('active')
                btn.parentElement.parentElement.classList.remove('active')
            })
            item.classList.add('active')
            boxEl.classList.add('active')
            e.currentTarget.classList.add('active')
        }
    })
})
