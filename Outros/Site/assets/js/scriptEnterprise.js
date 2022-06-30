const morfo = document.querySelector('.morfo')
let nextWords = ['hoje','amanhã','e sempre']
let lastWordKnow = null
let letters = null
let letter = null
let mimic = []
let holder = null
let x = null
let y = null

function cleanWord(){
    let w = morfo.innerHTML
    let array = w.split("")
    if(array.length == 0){
        window.clearInterval()
        writeWord()
    }else{
        array.splice((w.length-1),1)
        console.log(array)
        w = array.join('')
        morfo.innerHTML = w
    }
    if(morfo.innerHTML == ''){
        nextWord()
        clearInterval(y)
        x = setInterval(prepareWord,800)
        console.log('AGAIN')
    }
}
function getWord(){
    let word = lastWordKnow.split("")

}
function setWord(){
    if (lastWordKnow == null){
        lastWordKnow = nextWords[0]
        holder = lastWordKnow
    }else{
        nextWord
    }
}
function nextWord(){
    let loc = nextWords.indexOf(lastWordKnow)
    let max = nextWords.length-1
    loc++
    if(loc>max){
        loc = 0
    }else{
        loc = loc
    }
    lastWordKnow = nextWords[loc]
    holder = lastWordKnow

}
function prepareWord(){
    setWord()
    letters = holder.split("")
    letter = letters.splice(0,1)
    holder = letters.join("")
    morfo.innerHTML = morfo.innerHTML.concat(letter)
    if(letter.length === 0){
        nextWord()
        window.clearInterval(x)
    }
    if(lastWordKnow.length == morfo.innerHTML.length){
        window.clearInterval(x)
        y = setInterval(cleanWord,1000)
        console.log('again')
    }
}
function checkVars(){
    console.log('Palavra Atual: ',lastWordKnow)
    console.log('Proximas Letras: ',letters)
    console.log('Letra Atual: ',letter)
    console.log('Variavel de Seg: ',holder)
}
    
x = setInterval(prepareWord,800)