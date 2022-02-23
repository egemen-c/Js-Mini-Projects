import {
    countries
} from './data.js'
const data = countries;

// calculate top 10 poplation countries and create new array population + name 
function calcPopulation() {
    let arr = []
    let pop = []
    pop = data.map(e => {
        return e.population
    })
    pop.sort((a, b) => {
        return b - a
    })
    for (let i = 0; i < 10; i++) {
        data.forEach(e => {
            if (e.population == pop[i]) {
                arr.push({
                    y: e.population,
                    label: e.name
                })
            }
        })
    }
    createDom(arr);
    // create dom elements with array data 
}

function createDom(arr) {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        data: [{
            type: "bar",
            name: "countries",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: arr
        }]
    });
    chart.render();
}
window.onload = calcPopulation();