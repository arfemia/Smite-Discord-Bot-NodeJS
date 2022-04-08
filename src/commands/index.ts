import { ability } from './ability';
import { command } from './god'
import { lore } from './lore';
import { randomGod } from './randomGod'

const commands = [
  command,
  randomGod,
  lore,
  ability,

]

export default commands;
export { command, randomGod, lore, ability };
