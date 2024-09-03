let clickedArr = JSON.parse(localStorage.getItem('clicked'));
console.log(clickedArr);

let lastObj = clickedArr[clickedArr.length - 1];
console.log(lastObj);

let div = document.createElement('div');
document.body.appendChild(div);

let h3 = document.createElement('h3');
h3.innerText = `Id: ${lastObj.id}`;

let name = document.createElement('p');
name.innerText = lastObj.name;

let username = document.createElement('p');
username.innerText = `Username: ${lastObj.username}`;

let email = document.createElement('p');
email.innerText = `Email: ${lastObj.email}`;

let phone = document.createElement('p');
phone.innerText = `Phone number: ${lastObj.phone}`;

let website = document.createElement('p');
website.innerText = `Website: ${lastObj.website}`;

let h3Address = document.createElement('h3');
h3Address.innerText = 'Address:';

let {address} = lastObj;

let street = document.createElement('p');
street.innerText = `Street - ${address.street}`;


div.append(h3, name, username, email, phone, website, h3Address, street)