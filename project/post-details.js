let posts = JSON.parse(localStorage.getItem('post'));
console.log(posts);
let lastObj = posts[posts.length - 1];
console.log(lastObj);

let div = document.createElement('div');
document.body.appendChild(div);

let userId = document.createElement('h3');
userId.innerText = `User id: ${lastObj.userId}`;

let id = document.createElement('h3');
id.innerText = `Id: ${lastObj.id}`;

let title = document.createElement('h4');
title.innerText = `Title: ${lastObj.title}`;

let body = document.createElement('p');
body.innerText = lastObj.body;

div.append(userId, id, title, body);

let commentsDiv = document.createElement('div');
document.body.appendChild(commentsDiv);

let h2 = document.createElement('h2');
h2.innerText = 'Comments:';
commentsDiv.appendChild(h2);

fetch('https://jsonplaceholder.typicode.com/comments?postId=' + lastObj.id)
    .then(res => res.json())
    .then(comments => {
        for (const comment of comments) {
            let postId = document.createElement('h3');
            postId.innerText = `Post id: ${comment.postId}`;

            let id = document.createElement('h3');
            id.innerText = `Id: ${comment.id}`;

            let name = document.createElement('h4');
            name.innerText = `Title: ${comment.name}`;

            let email = document.createElement('p');
            email.innerText = `Email: ${comment.email}`;

            let body = document.createElement('p');
            body.innerText = comment.body;

            commentsDiv.append(postId, id, name, email, body);
        }
    })
