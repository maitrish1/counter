
let text = document.getElementById('count');
let add = document.getElementById('up');
let sub = document.getElementById('down');

 let count = 0;
 add.addEventListener('click', () => {
     count++;
     text.innerHTML = count;
 })

 sub.addEventListener('click', () => {
     count--;
     text.innerHTML = count;
 })
 