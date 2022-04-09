
import ALL_ITEMS from '../../config/smite/items'
import SmiteItem from '../../models/SmiteItem';
import getRandomItem from './getRandomItem';

/**
 * 
 * @param itemArg Smite god name or title
 * @returns A smite God
 */
export default function getItem(itemArg: string): {items: SmiteItem[], random: boolean} {

  if (itemArg === 'random') {
    return {items: [getRandomItem()], random: true}
  }

  let itemFound = false
  const items: SmiteItem[] = []
  for (let i = 0; i < ALL_ITEMS.length; i++) {

    const itemName = ALL_ITEMS[i].DeviceName.toLowerCase()

    if (itemName.includes(itemArg) && !itemName.includes('(old)')) {

      itemFound = true
      const item = ALL_ITEMS[i]
      items.push(item)
      //return {item, random: false};
    }
  }
  if (!itemFound || items.length < 1) {

    return {items: [getRandomItem()], random: true}
  }

  return {items, random: false}
}