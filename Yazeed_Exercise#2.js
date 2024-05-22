
const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};

// Task 1: Find the person with the most skills in the users object and print their name
function mostSkills() {
    let maxSkills = 0, userName;
    for (let user in users) {
        let numSkills = users[user].skills.length
        if (maxSkills < numSkills) {
            maxSkills = numSkills
            userName = user
        }
    }
    console.log(`${userName} is the person with the most skills`)
}
mostSkills();

// Task 2: Count the number of logged-in users and users with points greater than or equal to 50, then print both counts.
function countUsers() {
    let numOfLoggedIn = 0, numOfGreater = 0;
    for (let user in users) {
        if (users[user].isLoggedIn)
            numOfLoggedIn++
        if (users[user].points >= 50)
            numOfGreater++
    }
    console.log(`the number logged-in users = ${numOfLoggedIn}`)
    console.log(`the number users who have points greater than 50 = ${numOfGreater}`)

}
countUsers()

// Task 3: Find and print the names of people who are MERN stack developers from the users object.
function findMERN() {
    MERN_Users = []
    for (let user in users) {
        let count = 0;
        count += users[user].skills.includes("MongoDB")
        count += users[user].skills.includes("Express")
        count += users[user].skills.includes("React")
        count += users[user].skills.includes("Node")
        if (count == 4)
            MERN_Users.push(user)
    }

    console.log('MERN Users are:', MERN_Users.join(', '))
}
findMERN();


// Task 4: Return the users that are MERN Stack developers using High Order Function -> Filter().
let _MERN_Persons = new Object();
function findUsersMERN() {
    for (let user in users) {
        filteredUser = users[user].skills.filter(skill => skill == "MongoDB" || skill == "Express" || skill == "React" || skill == "Node")

        if (filteredUser.length == 4)
            _MERN_Persons[user] = users[user];
    }
}
findUsersMERN()
console.log(_MERN_Persons)


// Task 5:  Add your name as a user in the users object, including your email, skills, age, login status, and points. Print the updated users object with your name added.
users.Yazeed = {
    email: "yazeed.zaka@gmail.com",
    skills: ["HTML", "CSS", "JS"],
    age: 20,
    isLoggedIn: true,
    points: 33,
};
console.log(users)

// Task 6: Get all the keys or properties of the users object and print them.
console.log(Object.keys(users).join(', '))

// Task 7: Get all the values of the users object and print them.
console.log(Object.values(users))


