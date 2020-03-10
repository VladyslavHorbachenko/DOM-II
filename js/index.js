// Your code goes here
let navigation = document.querySelector("nav");

navigation.addEventListener("mouseover",function(){
    this.style.backgroundColor = 'red';
})
const logo = document.querySelector('h1');
    logo.addEventListener("click", (event) => {
    logo.style.transform = "rotateX(360deg)";
    logo.style.transitionDuration = "3s";
    event.stopPropagation();
    })

    addEventListener("keydown", function(event) {
        if (event.keyCode == 86) //v
          document.body.style.background = "violet";
      });
   let intro = document.querySelector("intro");
   
document.addEventListener('wheel',function(){
    document.querySelectorAll('h2').forEach(item =>{
        item.style.color = "red";
    })
})

document.addEventListener('scroll',function(){
    document.querySelectorAll('h2').forEach(item =>{
        item.style.color = "blue";
    })
})

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  const password = document.querySelector('input[type="password"]');

  password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';    
  });
   
  let draggedEl;document.addEventListener('drag', event => {});document.addEventListener('dragstart', event => {    if (event.target.classList.contains('nav-link')) {        draggedEl = event.target;        draggedEl.style.opacity = '.5';    }})
document.addEventListener('dragover', event => {    event.preventDefault();});
document.addEventListener('dragend', event => {    event.target.style.opacity = '';})
document.addEventListener('drop', event => {    event.preventDefault();    if (event.target.classList.contains('nav')) {        draggedEl.remove();        event.target.appendChild(draggedEl);        draggedEl = null;    }})


 function resize() {
    console.log("You have changed the size of the browser window!");
  }

  function OnSelectFunction() {
  alert("You have selected some text!");
}
function DbClickFunction() {
    document.body.style.backgroundColor = "yellow";
  }