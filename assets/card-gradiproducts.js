let optionColor = document.querySelectorAll("optionColor");

optionColor.forEach(function (item, index) {
    item.addEventListener('click', function(){   
        changeImage(this);
        changePrice(this);
        let allOptions = getClosestOptionColors(this);
        for (let i=0; i < allOptions.length; i++) {
            allOptions[i].classList.remove("selected");
        }
        this.closest('.option__item').classList.add("selected")
    });
});

optionColor.forEach(function (item, index) {
    item.addEventListener('mouseover', function(){    
        changeImage(this);
    });
});

optionColor.forEach(function (item, index) {
    item.addEventListener('mouseout', function(){
        let allOptions = this.closest('.option__container');
        let optionSelected = allOptions.querySelector('.selected')
        if (optionSelected){
            changeImage(optionSelected.firstElementChild);
        }
        else{
            changeImage(allOptions.firstElementChild.firstElementChild)
        }
    });
});

function changePrice(optionColorElement){
    let dataColor = getDataColor(optionColorElement);
    let productElement = optionColorElement.closest('.card--media')
    let prices = productElement.querySelectorAll(".price")
    for (let i=0; i < prices.length; i++) {
        prices[i].classList.remove("price-selected");
        if (dataColor == prices[i].getAttribute('data-color')){
            prices[i].classList.add("price-selected");
        }
    }
}

function changeImage(optionColorElement){
    let dataColor = getDataColor(optionColorElement);
    let productElement = optionColorElement.closest('.card--media')
    let productMedias = productElement.querySelector('.card__inner')
    let allMedias = productMedias.querySelectorAll("[data-color]")
    for (let i=0; i < allMedias.length; i++) {
        allMedias[i].setAttribute("style", "display:none;");
    }
    let thisElement = productMedias.querySelectorAll("[data-color='"+ dataColor +"']")
    thisElement[0].setAttribute("style", "display:block;");
}

function getDataColor(element) {
    let val = element.getAttribute("data-color");  
    return val;
}

function getClosestOptionColors(element){
    let optionContainer = element.closest('.option__container')
    let allOptions = optionContainer.querySelectorAll('.option__item')
    return (allOptions)
}
