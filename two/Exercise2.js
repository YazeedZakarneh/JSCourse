
const posts = document.body.getElementsByClassName(".news p");



const users = new Object();

for (let i = 0, j = 0; i < posts.length / 2; i++, j += 2) {
    users[`${i}`] = {
        text: posts[j].innerText
    }
}

for (let i = 0, j = 1; i < posts.length / 2; i++, j += 2) {

    let s = posts[j].innerText
    let ss = s.split(",");

    let likes = ss[0].split(' ')[0];
    let comments = ss[1].split(' ')[0];

    users[`${i}`i].likes = likes;
    users[`${i}`].comments = comments;
    users[`${i}`].time = ss[2];
}

console.log(users);


