let btn1 = document.querySelector('[value="1"]')
let btn2 = document.querySelector('[value="2"]')
let btn3 = document.querySelector('[value="3"]')
let btn4 = document.querySelector('[value="4"]')
let btn5 = document.querySelector('[value="5"]')
let btn6 = document.querySelector('[value="6"]')
let btn7 = document.querySelector('[value="7"]')
let btn8 = document.querySelector('[value="8"]')
let btn9 = document.querySelector('[value="9"]')
let btn0 = document.querySelector('[value="0"]')
let btnm = document.querySelector('[value="*"]')
let btnd = document.querySelector('[value="/"]')
let btnp = document.querySelector('[value="+"]')
let btns = document.querySelector('[value="-"]')
let btndec = document.querySelector('[value="."]')
let btnac = document.querySelector('[value="allClear()"]')
let btnequ = document.querySelector('[value="calculate()"]')

let blok = document.querySelector('[data-input]')
let answer = document.getElementById('result')

btn1.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn2.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn3.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn4.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn5.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn6.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn7.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn8.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn9.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btn0.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btnm.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btnd.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btnp.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btns.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})
btndec.addEventListener('click',(event)=>{
    blok.value += event.target.innerText
})


btnequ.addEventListener('click', function() {
    evaluateSum();
});

function evaluateSum() {
    
    blok.value = eval(answer.value);
}

btnac.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    blok.value = '';
}

