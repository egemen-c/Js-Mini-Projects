const year = document.querySelector('#year');
const fullDate = document.querySelector('#fullDate');
const list = document.querySelectorAll('li')
function listColor() {
    const texts = []
    list.forEach((title, index) => {
        if (index=== 0) {
            title.style.backgroundColor = 'green'
        }else if (index === 1) {
            title.style.backgroundColor = 'yellow'
        }else {
            title.style.backgroundColor = 'red'
        }
    })
}
const date = new Date();
fullDate.innerHTML = date.toDateString()
let i = 0;
function changeH1Color() {
    const colors = ["black", "blue", "brown", "green", "red", "yellow"]
    year.style.color = colors[i]
    fullDate.style.backgroundColor = colors[i]
    i = (i + 1) % colors.length;
} 
setInterval(changeH1Color, 1000);

listColor()