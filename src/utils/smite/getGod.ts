
import ALL_GODS from '../../config/smite/gods'
import SmiteGod from '../../models/SmiteGod';
import getRandomGod from './getRandomGod';

/**
 * 
 * @param godArg Smite god name or title
 * @returns A smite God
 */
export default function getGod(godArg: string): {god: SmiteGod, random: boolean} {

  if (godArg === 'random') {
    return {god: getRandomGod(), random: true}
  }
  for (let i = 0; i < ALL_GODS.length; i++) {


    if (ALL_GODS[i].Name.toLowerCase().includes(godArg) || ALL_GODS[i].Title.toLowerCase().includes(godArg)) {

      const god = ALL_GODS[i]
      return {god, random: false};


    }
  }
  return {god: getRandomGod(), random: true}
}