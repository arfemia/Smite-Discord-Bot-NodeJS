import ALL_ITEMS from "../../config/smite/items";

export default function getRandomItem() {

    const randomIndex = Math.floor(Math.random() * ALL_ITEMS.length);
    const randomGod = ALL_ITEMS[randomIndex];

    return randomGod;
} 