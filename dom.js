var header_title = document.getElementById('header-title');
var Header = document.getElementById('main-header');
//console.log(Header);
//Header.textContent = 'Hello';
//Header.innerText = 'GoodBye';
//console.log(Header.textContent);
//console.log(Header.innerText);
//header_title.style.padding = '30px 30px 30px 30px';
//header_title.style.border = 'solid 1px #000';
//Header.style.borderBottom = 'solid 3px #000';
// var select = document.getElementsByClassName('list-group-item');
// console.log(select[2]);
// select[2].style.backgroundColor = 'green';

// for(var i= 0; i< select.length; i++){
//     select[i].style.fontWeight = 'bold';
// }
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value= 'send';

var items = document.querySelector('.list-group-item');
items.style.color= 'red';

var second_item= document.querySelector('.list-group-item:nth-child(2)');
second_item.style.backgroundColor= 'green';

var third_item= document.querySelector('.list-group-item:nth-child(3)');
third_item.style.color= 'white';

//QuerySelector//
var fontColor = document.querySelectorAll('.list-group-item');
fontColor[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var j=0; j<odd.length; j++){
    odd[j].style.backgroundColor= 'green';
}