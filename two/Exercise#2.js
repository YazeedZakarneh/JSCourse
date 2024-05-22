
const posts = document.body.getElementsByClassName(".news");

const others = document.body.getElementsByClassName(".info")


const users = new Object();

for (let i in posts) {
    users[i] = {
        text: posts[i][0].innerText
    }
}

for (let other in others) {

    let ss = others[other].split(',');

    let likes = ss[0].split(' ')[0];
    let comments = ss[1].split(' ')[0];

    users[other].likes = likes;
    users[other].comments = comments;
    users[other].time = ss[2];
}

console.log(users);


