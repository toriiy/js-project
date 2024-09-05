let mainDiv = document.getElementById('main-block');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            mainDiv.appendChild(div);

            let h3 = document.createElement('h3');
            h3.innerText = `id: ${user.id}`;

            let p = document.createElement('p');
            p.innerText = user.name;

            let button = document.createElement('button');
            button.innerText = 'More info...';

            button.onclick = function () {
                let clickedUser = JSON.parse(localStorage.getItem('user')) || [];
                clickedUser.push(user);
                localStorage.setItem('user', JSON.stringify(clickedUser));
            }

            button.addEventListener('click', function () {
                window.location = 'user-details.html';
            });

            div.append(h3, p, button);
        }
    });