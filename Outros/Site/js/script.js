const b1 = document.querySelector('.hire')
const b2 = document.querySelector('.beHired')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const msg = document.querySelector('.msg')
const grid1 = document.querySelector('.grid')
const grid2 = document.querySelector('.grid2')
const body = document.querySelector('body')

b1.onmouseover = function hoverHire(){
    body.style.backgroundColor = '#C2DED1'
    b1.classList.add('fullscreen')
    btn1.classList.add('mrg-top')
    b2.classList.add('vanish')
    msg.classList.add('vanish')
    grid1.classList.remove('fog')
}
b1.onmouseout = function hoverHire(){
    b1.classList.remove('fullscreen')
    btn1.classList.remove('mrg-top')
    b2.classList.remove('vanish')
    msg.classList.remove('vanish')
    grid1.classList.add('fog')
}
b2.onmouseover = function hoverHire(){
    body.style.backgroundColor = '#CDC2AE'
    b2.classList.add('fullscreen')
    btn2.classList.add('mrg-top')
    b1.classList.add('vanish')
    msg.classList.add('vanish')
    grid2.classList.remove('fog')
}
b2.onmouseout = function hoverHire(){
    b2.classList.remove('fullscreen')
    btn2.classList.remove('mrg-top')
    b1.classList.remove('vanish')
    msg.classList.remove('vanish')
    grid2.classList.add('fog')
}
btn1.onmouseover = function changeColors() {
    b1.classList.add('hover-div')
    btn1.classList.add('hover-btn')
}
btn1.onmouseout = function changeColors(){
    b1.classList.remove('hover-div')
    btn1.classList.remove('hover-btn')
}
btn2.onmouseover = function changeColors() {
    b2.classList.add('hover-div')
    btn2.classList.add('hover-btn')
}
btn2.onmouseout = function changeColors(){
    b2.classList.remove('hover-div')
    btn2.classList.remove('hover-btn')
}

function test(){
    window.location('http://127.0.0.1:5500/Outros/Site/testes.html')
}