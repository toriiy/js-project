let clickedArr = JSON.parse(localStorage.getItem('user'));
console.log(clickedArr);

let lastObj = clickedArr[clickedArr.length - 1];
console.log(lastObj);

let div = document.createElement('div');
div.classList.add('user-block');
document.body.appendChild(div);

for (const key in lastObj) {
    if (typeof lastObj[key] === 'object') {
        let innerDiv = document.createElement('div');
        div.appendChild(innerDiv);

        let h3 = document.createElement('h3');
        h3.innerText = `${key}:`;
        h3.classList.add('heading-capital-letter')
        innerDiv.appendChild(h3)

        const obj = lastObj[key];
        for (const objKey in obj) {
            if (typeof obj[objKey] !== 'object') {
                let pObj = document.createElement('p');
                pObj.innerText = `${objKey}: ${obj[objKey]}`;
                innerDiv.appendChild(pObj);
            } else {
                let innerBlock = document.createElement('div');
                innerBlock.classList.add('inner-block');
                innerDiv.appendChild(innerBlock);

                let h4 = document.createElement('h4');
                h4.innerText = `${objKey}:`;
                h4.classList.add('heading-capital-letter')
                innerBlock.appendChild(h4);

                const objInner = obj[objKey];
                for (const objInnerKey in objInner) {
                    let pInnerObj = document.createElement('p');
                    pInnerObj.innerText = `${objInnerKey}: ${objInner[objInnerKey]}`;
                    innerBlock.appendChild(pInnerObj);
                }
            }
        }

    } else {
        let p = document.createElement('p');
        p.innerText = `${key}: ${lastObj[key]}`;
        div.appendChild(p);
    }
}

let button = document.createElement('button');
button.classList.add('posts-button-center');
button.innerText = 'post of current user';

let divPosts = document.createElement('div');
divPosts.classList.add('post-title-block');
document.body.append(button, divPosts);

button.onclick = function () {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + lastObj.id)
        .then(res => res.json())
        .then(posts => {

            for (const post of posts) {
                let divPostBlock = document.createElement('div');
                divPosts.appendChild(divPostBlock);
                let h4 = document.createElement('h4');
                h4.innerText = `Title: ${post.title}`;
                let btn = document.createElement('button');
                btn.innerText = 'more...';

                divPostBlock.append(h4, btn);

                btn.onclick = function () {
                    let currentPost = JSON.parse(localStorage.getItem('post')) || [];
                    currentPost.push(post);
                    localStorage.setItem('post', JSON.stringify(currentPost));
                }

                btn.addEventListener('click', function () {
                    window.location = 'post-details.html';
                });
            }
        });
}


