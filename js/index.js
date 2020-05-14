// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// tags
let body = document.querySelector('body');
let destinationButton = document.querySelectorAll('.destination .btn');
let homeBar = document.querySelectorAll('.nav a');


let welcome = document.querySelector('h2');
welcome.addEventListener('click', (event) => 
    {event.target.style.color = 'pink';
});
welcome.addEventListener('dblclick',(event)=>{
    event.target.style.color = 'black';
});

let letsGo = document.querySelectorAll('h2')[1];
letsGo.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
});

window.addEventListener('load', () => {
	alert('Welcome to Fun Bus');
});
window.addEventListener('scroll', (event)=>{
    body.style.backgroundColor = 'pink';
})


console.log(destinationButton[0]);
destinationButton[0].addEventListener('click', (event) => {
    event.target.style.color = 'red';
})

let adventure = document.querySelector('.img-content div');
let img = document.querySelector('.img-content')
adventure.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('img was clicked')
});
img.addEventListener('click', () => {
    alert('Parent was clicked')
});
 
homeBar[0].addEventListener('click', (e)=>{
    e.preventDefault();
})
console.log(homeBar[0]);











