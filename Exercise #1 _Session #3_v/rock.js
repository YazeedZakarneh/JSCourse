document.querySelector('h1').innerHTML = "Zain's Game";

document.querySelector('div #comp').style.color = 'green'

let lk = document.querySelector('#r').getAttribute('src')

console.log(lk)

let images = document.getElementByName('img')
console.log(images);
// images[1].src = images[0].src;

let pa = document.createElement('p');
pa.innerHTML = "Game Over";
pa.style.color = "red";
document.body.appendChild(pa);
