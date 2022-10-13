const c =console.log.bind(console)
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn= document.querySelector('#btn')
const color= document.querySelector('.color')
const body=document.querySelector('main')


function change (){
    let x =Math.floor( Math.random()*colors.length)
    color.innerHTML=colors[x]
    body.style.backgroundColor=colors[x]
    c(x)
}

btn.addEventListener('click', change)
