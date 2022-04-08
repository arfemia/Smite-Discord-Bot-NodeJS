import ALL_GODS from "../../config/smite/gods";

export default function getRandomGod() {

    const randomIndex = Math.floor(Math.random() * ALL_GODS.length);
    const randomGod = ALL_GODS[randomIndex];

    return randomGod;
} 