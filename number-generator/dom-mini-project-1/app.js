
let btn = document.querySelector('#btn')
btn.addEventListener('click',   function () {
    let input = document.getElementById('input');
    let span = document.getElementById('span');
    let value =  parseInt(input.value, 10)
    if (isNaN(value)) {
        alert("lütfen sadece numara girin")       
    }else {
        numberGen(value)
        asal()

    }
    console.log(isNaN(value));
})

const container = document.querySelector('#number-wrapper')
function numberGen(value) {
    while(container.lastChild){
        container.lastChild.remove()
    }
    for (let i = 1; i <= value; i++ ){
        const newDiv = document.createElement("div");
        if (i % 2 == 0) {
            newDiv.innerHTML = i 
            newDiv.style.backgroundColor = "green"
        }else if (i % 2 !== 0) {
            newDiv.innerHTML = i
            newDiv.style.backgroundColor = "yellow"

        }
        container.append(newDiv)
    }

}
function asal() {
    const divs = document.querySelectorAll('div')
    divs.forEach(element => {
        let isPrime = true;
        let number = parseInt(element.innerHTML)
        if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            element.style.backgroundColor = "red"
        } 
    }
    }) 
}