const c =console.log.bind(console)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn= document.querySelector('#btn')
const color= document.querySelector('.color')
const body=document.querySelector('main')

function change (){
    let code = `#`
    for (let index = 0; index < 6; index++) {
        let x =Math.floor( Math.random()*hex.length)
        code += hex[x]      
    }
    color.innerHTML=code
    body.style.backgroundColor=code
}

btn.addEventListener('click', change)