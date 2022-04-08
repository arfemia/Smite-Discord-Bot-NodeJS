import gods from "../config/smite/gods";

export default function getRandomGod() {

    const randomIndex = Math.floor(Math.random() * gods.length);
    const randomGod = gods[randomIndex];

    return randomGod;
} 