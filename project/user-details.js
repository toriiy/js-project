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
street.innerText = `${address.street} street`;

let suite = document.createElement('p');
suite.innerText = address.suite;

let city = document.createElement('p');
city.innerText = `City: ${address.city}`;

let zipcode = document.createElement('p');
zipcode.innerText = `Zipcode: ${address.zipcode}`;

let h3Geo = document.createElement('h3');
h3Geo.innerText = 'Geo:';

let {geo} = address;

let lat = document.createElement('p');
lat.innerText = `Lat: ${geo.lat}`;

let lng = document.createElement('p');
lng.innerText = `Lng: ${geo.lng}`;

let h3Company = document.createElement('h3');
h3Company.innerText = 'Company:';

let {company} = lastObj;

let companyName = document.createElement('p');
companyName.innerText = `Name: ${company.name}`;

let catchPhrase = document.createElement('p');
catchPhrase.innerText = `Catch phrase: ${company.catchPhrase}`;

let bs = document.createElement('p');
bs.innerText = `Bs: ${company.bs}`;

div.append(h3, name, username, email, phone, website, h3Address, street, suite, city, zipcode, h3Geo, lat, lng, h3Company, companyName, catchPhrase, bs);

let button = document.createElement('button');
button.innerText = 'post of current user';

let divPosts = document.createElement('div');
document.body.append(button, divPosts);

button.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + lastObj.id)
        .then(res => res.json())
        .then(posts => {
            let h3 = document.createElement('h3');
            h3.innerText = 'Posts titles:';
            divPosts.appendChild(h3);

            for (const post of posts) {
                let h4 = document.createElement('h4');
                h4.innerText = post.title;
                let btn = document.createElement('button');
                btn.innerText = 'more...';

                divPosts.append(h4, btn);

                btn.onclick = function () {
                    let currentPost = JSON.parse(localStorage.getItem('post')) || [];
                    currentPost.push(post);
                    localStorage.setItem('post', JSON.stringify(currentPost));
                }

                btn.addEventListener('click', function () {
                    open('post-details.html');
                });
            }
        });
}


