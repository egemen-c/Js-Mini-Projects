const container = document.querySelector('#number-wrapper')
function numberGen() {
    for (let i = 0; i <= 101; i++ ){
        const newDiv = document.createElement("div");
        if (i % 2 == 0) {
            newDiv.innerHTML = i 
            newDiv.style.backgroundColor = "green"
        }else if (i % 2 !== 0) {
            newDiv.innerHTML = i
            newDiv.style.backgroundColor = "yellow"

        }else{
            console.log("err");
        }
        container.append(newDiv)
    }
}
function asal() {
    const divs = document.querySelectorAll('div')
    divs.forEach(element => {
        let isPrime = true;
        let number = parseInt(element.innerHTML)
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            element.style.backgroundColor = "red"
        } else {
            console.log("değil");;
        }
    }
    }) 
}
numberGen()
asal()