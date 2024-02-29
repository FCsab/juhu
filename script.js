const loginScreen = document.createElement('div')
const loginLabel = document.createElement('label')
const loginInput = document.createElement('input')
const loginButton = document.createElement('button')
let username = ""
let pontszam=0

document.body.style.margin = "0"
document.body.appendChild(loginScreen)
loginScreen.appendChild(loginLabel)
loginScreen.appendChild(loginInput)
loginScreen.appendChild(loginButton)

loginLabel.innerText = "Név:"
loginButton.innerText = "Start"

loginInput.id = "name"
loginLabel.htmlFor = "name"

loginScreen.style.backgroundColor = "green"
loginScreen.style.width = "250px"
loginButton.style.display = "block"
loginScreen.style.lineHeight = "1.9"
loginScreen.style.margin = "auto"
loginScreen.style.textAlign = "center"
loginButton.style.margin = "auto"
loginScreen.style.padding = "10px"

let height = window.innerHeight /2 - loginScreen.offsetHeight / 2
loginScreen.style.marginTop = height + "px"

loginButton.addEventListener('click',function(){
    login()
})
loginInput.addEventListener('keypress',function(e){
    if(e.key == 'Enter'){
        login()
    }
})
function login(){
    username = loginInput.value
    loginScreen.remove()

    document.body.appendChild(header)
    document.body.appendChild(main)
    document.body.appendChild(footer)
    let mainHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight
    main.style.height=mainHeight+"px";
    createButton()
    setInterval(function(){
        if(main.innerHTML.length>0){
            pontszam-=1
            pointsDiv.innerText="Pontszám: "+pontszam
        }
        main.innerHTML=""
        createButton()
    },0.1)
    nameDiv.innerText = "Felhasználónév: " + username
    pointsDiv.innerText = "Pontszám: 0" 
}

this.addEventListener('resize',function(){
    let mainHeight = window.innerHeight - header.offsetHeight - footer.offsetHeight
    main.style.height=mainHeight+"px";
})

function createButton(){
    const newBut = document.createElement('button')
    newBut.innerText=pontszam+1+" gomb"
    pointsDiv.innerText="Pontszám: "+pontszam
    newBut.style.marginLeft=Math.random() * (window.innerWidth - newBut.offsetWidth)+"px"
    newBut.style.marginTop=Math.random() * (main.offsetHeight - newBut.offsetHeight)+"px"
    main.appendChild(newBut)
    newBut.addEventListener('click',function(){
        pontszam+=1
        createButton()
        newBut.remove()
    })
}

const header = document.createElement('header')
const main = document.createElement('main')
const footer = document.createElement('footer')

footer.innerText = "Név - osztály"
footer.style.height = "40px"
footer.style.backgroundColor = "rgb(50,60,70)"
footer.style.color = "white"
footer.style.padding = "10px"
footer.style.boxSizing = "border-box"

header.style.height = "40px"
header.style.padding = "10px"
header.style.boxSizing = "border-box"
header.style.backgroundColor = "rgb(50,60,70)"
header.style.color = "white"

const nameDiv = document.createElement('div')
const pointsDiv = document.createElement('div')

nameDiv.style.display = "inline-block"
pointsDiv.style.display = "inline-block"
nameDiv.style.marginRight = "10px"

header.appendChild(nameDiv)
header.appendChild(pointsDiv)













