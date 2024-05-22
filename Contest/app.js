
const fruitEmojis = ["🍎", "🍌", "🍇", "🍊", "🍓", "🍍", "🍒", "🍉", "🥭", "🍑"];

console.log(fruitEmojis.length)

console.log(fruitEmojis[0], fruitEmojis[fruitEmojis.length - 1])

fruitEmojis.push("🥝");

console.log(fruitEmojis)

delete fruitEmojis[fruitEmojis.length - 1]

console.log(fruitEmojis.includes("🍓"));

console.log(fruitEmojis.find("🍓"));

const firstThreeFruits = fruitEmojis.slice(0, 3);

console.log(firstThreeFruits)

const emojisString = fruitEmojis.join(" ");

console.log(emojisString)

const sortedFruitEmojis = fruitEmojis.sort()

console.log(sortedFruitEmojis)

const reversedFruitEmojis = fruitEmojis.reverse();

console.log(reversedFruitEmojis)