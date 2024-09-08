let posts = JSON.parse(localStorage.getItem('post'));
console.log(posts);

let lastObj = posts[posts.length - 1];
console.log(lastObj);

let div = document.createElement('div');
div.classList.add('post-block');
document.body.appendChild(div);

let h2 = document.createElement('h2');
h2.innerText = 'Post:';
div.appendChild(h2);

for (const key in lastObj) {
    let p = document.createElement('p');
    p.innerText = `${key}: ${lastObj[key]}`;
    div.appendChild(p);
}

let h3 = document.createElement('h3');
h3.classList.add('heading-center');
h3.innerText = 'Comments:';

let commentsDiv = document.createElement('div');
commentsDiv.classList.add('comments-block');
document.body.append(h3, commentsDiv);

fetch('https://jsonplaceholder.typicode.com/comments?postId=' + lastObj.id)
    .then(res => res.json())
    .then(comments => {
        for (const comment of comments) {
            let commentBlock = document.createElement('div');
            commentsDiv.appendChild(commentBlock);

            for (const commentKey in comment) {
                let pComments = document.createElement('p');
                pComments.innerText = `${commentKey}: ${comment[commentKey]}`;
                commentBlock.appendChild(pComments);
            }
        }
    })
