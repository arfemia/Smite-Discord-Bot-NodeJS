import { all_gods } from "../config/smite/gods";

export default function getRandomGod() {

    const randomIndex = Math.floor(Math.random() * all_gods.length);
    const randomGod = all_gods[randomIndex];

    return randomGod;
} 