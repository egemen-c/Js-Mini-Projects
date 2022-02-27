class Students {
    constructor(name, surname, adress, course) {
        this.name = name
        this.surname = surname
        this.address = adress
        this.course = course
    }
}
class Ui {
    showUi(student) {
        const table = document.querySelector('#table')
        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.surname}</td>
        <td>${student.address}</td>
        <td>${student.course}</td>
        `
        table.append(row)
    }

}

let btn = document.querySelector('#submit-btn')
btn.addEventListener('click', function () {
    const name = document.querySelector('#name').value;
    surname = document.querySelector('#surname').value;
    address = document.querySelector('#address').value;
    course = document.querySelector('#course').value;

    const student = new Students(name, surname, address, course)
    const push = new Ui()
    push.showUi(student)

})

