let posts = JSON.parse(localStorage.getItem('post'));
console.log(posts);
let lastObj = posts[posts.length - 1];
console.log(lastObj);

let div = document.createElement('div');
document.body.appendChild(div);

for (const key in lastObj) {
    let p = document.createElement('p');
    p.innerText = `${key}: ${lastObj[key]}`;
    div.appendChild(p);
}

let commentsDiv = document.createElement('div');
document.body.appendChild(commentsDiv);

let h3 = document.createElement('h3');
h3.innerText = 'Comments:';
commentsDiv.appendChild(h3);

fetch('https://jsonplaceholder.typicode.com/comments?postId=' + lastObj.id)
    .then(res => res.json())
    .then(comments => {
        for (const comment of comments) {
            for (const commentKey in comment) {
                let pComments = document.createElement('p');
                pComments.innerText = `${commentKey}: ${comment[commentKey]}`;
                commentsDiv.appendChild(pComments);
            }
        }
    })
