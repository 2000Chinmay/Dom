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
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value= 'send';

// var items = document.querySelector('.list-group-item');
// items.style.color= 'red';

// var second_item= document.querySelector('.list-group-item:nth-child(2)');
// second_item.style.backgroundColor= 'green';

// var third_item= document.querySelector('.list-group-item:nth-child(3)');
// third_item.style.color= 'white';

// //QuerySelector//
// var fontColor = document.querySelectorAll('.list-group-item');
// fontColor[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var j=0; j<odd.length; j++){
//     odd[j].style.backgroundColor= 'green';
// }

//parentNode
var item = document.querySelector('#items');
console.log(item.parentNode);

//parentElement
console.log(item.parentElement);

item.parentNode.style.backgroundColor = 'yellow';

//childNode
console.log(item.children);
var itemSelect = item.children[1];
console.log(itemSelect.style.backgroundColor = 'skyblue');

//firstChild
var fchild = item.firstChild;
console.log(fchild);

//firstElementChild
var fEchild = item.firstElementChild;
console.log(fEchild);

//lastChild
var lchild = item.lastChild;
console.log(lchild);

//lastElementChild
var lastEleChild = item.lastElementChild;
console.log(lastEleChild);
lastEleChild.textContent = "Hello4";

//nextsibling
console.log(item.nextSibling);

//nextElementsibling
console.log(item.nextElementSibling);

//previoussibling
console.log(item.previousSibling);

//previouselementsibling
console.log(item.previousElementSibling);
item.previousElementSibling.style.color = 'gray';

//createElement
var newDiv= document.createElement('div');

//Add class
newDiv.className= 'DivClass';

//Add attribute
newDiv.setAttribute('ID', 'DivID');

//create text node
var newDivText = document.createTextNode('Hello World');

//add text to div/appendchild
newDiv.appendChild(newDivText);

//Appending newDiv to DOM
var container = document.querySelector('header .container');
var h = document.querySelector('header h1');
container.insertBefore(newDiv, h);

//console logging new Element
console.log(newDiv);

//styling div that is inserted into dom
newDiv.style.fontSize= '30px';












