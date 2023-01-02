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
var select = document.getElementsByClassName('list-group-item');
console.log(select[2]);
select[2].style.backgroundColor = 'green';

for(var i= 0; i< select.length; i++){
    select[i].style.fontWeight = 'bold';
}

