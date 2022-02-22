import {db} from './data.js'
const data = db
const lessons = document.querySelector('#lessons-container')
const challenges = data.challenges;
challenges.forEach(() => {
    let divs = document.createElement('div')
    divs.className = "lesson"
    lessons.append(divs)
})
const lesson = document.querySelectorAll('.lesson')
lesson.forEach(el => {
    let names = document.createElement('div')
    let topics = document.createElement('div')
    let status = document.createElement('div')
    names.className = "names"
    topics.className = "topics"
    status.className = "status"
    el.append(names, topics, status)
})
const names = document.querySelectorAll('.names')
names.forEach((element, index) => {
    let a = document.createElement("a")
    a.innerHTML = challenges[index].name
    a.setAttribute('href', challenges[index].githubUrl)
    a.setAttribute('target', "_blank")
    element.append(a)
})
const topics = document.querySelectorAll('.topics')
topics.forEach((ex, index) => {
    let x = document.createElement('details')
    x.className = "details"
    x.innerHTML = challenges[index].topics
    ex.append(x)
})
const details = document.querySelectorAll('.details')
details.forEach((es, index) => {
    let e = document.createElement('summary')
    e.className = "summary"
    e.innerHTML = challenges[index].topics[0]
    es.prepend(e)
})
const statuss = document.querySelectorAll('.status')
statuss.forEach((element, index) => {
    element.innerHTML = challenges[index].status
})

function getFullName() {
    return data.author.firstName + " " + data.author.lastName
}

function createBio() {
    let bio = document.querySelector('#bio')
    let p = document.createElement('p')
    let h2 = document.createElement('h2')
    let div = document.createElement('div')
    h2.innerHTML = getFullName(data);
    p.innerHTML = data.author.bio
    let socials = data.author.socialLinks
    socials.forEach(element => {
        let link = document.createElement('a')
        link.innerHTML = element.social
        link.setAttribute('href', element.url)
        div.append(link)
    })
    bio.prepend(h2, div, p)
}

function setSkills() {
    const
        titles = document.querySelector('.titles'),
        skills = document.querySelector('.skills'),
        quas = document.querySelector('.quas');
    const getAuthor = data.author
    getAuthor.titles.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element[0] + " " + element[1]
        titles.append(li)
    })
    getAuthor.skills.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element
        skills.append(li)
    })
    getAuthor.qualifications.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML = element
        quas.append(li)
    })
}
setSkills()
createBio()