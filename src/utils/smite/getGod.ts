
import gods from '../../config/smite/gods'
import SmiteGod from '../../interfaces/SmiteGod';
import getRandomGod from '../getRandomGod';

/**
 * 
 * @param godArg Smite god name or title
 * @returns A smite God
 */
export default function getGod(godArg: string): {god: SmiteGod, random: boolean} {

  if (godArg === 'random') {
    return {god: getRandomGod(), random: true}
  }
  for (let i = 0; i < gods.length; i++) {


    if (gods[i].Name.toLowerCase().includes(godArg) || gods[i].Title.toLowerCase().includes(godArg)) {

      const god = gods[i]
      return {god, random: false};


    }
  }
  return {god: getRandomGod(), random: true}
}