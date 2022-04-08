import { ability } from './ability';
import { command } from './god'
import { item } from './item';
import { lore } from './lore';
import { randomGod } from './randomGod'

const commands = [
  command,
  randomGod,
  lore,
  ability,
  item

]

export default commands;
export { command, randomGod, lore, ability, item };
