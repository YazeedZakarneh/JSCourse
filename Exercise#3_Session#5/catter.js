
const catImg = document.querySelector("img")
const catBtn = document.querySelector("button")

fetchData = async () => {

    const url = await fetch(`https://api.thecatapi.com/v1/images/search`)
    const data = await url.json();

    catImg.src = data[0].url;
}

catBtn.addEventListener("click", fetchData);

