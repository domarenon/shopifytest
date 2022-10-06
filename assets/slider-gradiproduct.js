(function(){
    const sliders = [...document.querySelectorAll('.slider__body')]
    const arrowNext = document.querySelector('#next')
    const arrowPrev = document.querySelector('#prev')

    arrowNext.addEventListener('click', () => changePosition(1))
    arrowPrev.addEventListener('click', () => changePosition(-1))

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        let value = currentElement + change;
        if (value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1
        }
        sliders[currentElement-1].classList.toggle('.slider__body--show')
        sliders[value-1].classList.toggle('.slider__body--show')
    }
    
})()