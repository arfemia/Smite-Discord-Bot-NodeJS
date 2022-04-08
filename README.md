# Smite-Discord-Bot-NodeJS
Discord bot built with the intention of mastering Node.js and building a useful tool for my friends and I for a game we enjoy

## Setup
This bot was made from the Discord Bot with Slash Commands built with Node.js, Typescript, and ES6.
Source code for the boilerplate can be found here: [Version 1.0: Discord-Bot-Node-TS-ES6](https://github.com/arfemia/Discord-Bot-Typescript-Node-Template/releases/tag/1.0)

## Summary 
This bot in its current implementation is the foundation for a Discord bot wrapper for HiRez's Smite API.

![Discord Bot](https://i.gyazo.com/1be50756edd11e8281893ab7a2ac5c16.png)

---
## Commands
  #### Example command: `/commandName {commandParameter} {optioncommandParameter?}`
  *Commands are not case sensitive unless otherwise noted*
  #### `/god {god?}`
   - `@optional-param god` - The name or title of the god to display, gives a random god if input cannot be resolved or is empty
       - `Ares` or `God of War` for Ares
   - `@returns` - A message embed displaying the god
  #### `/randomgod`
   - `@returns` - A message embed displaying a random god
  #### `/ability {god?} {ability?}`
   - `@optional-param god` - The name or title of the god to display, gives a random god if input cannot be resolved or is empty
   - `@optional-param ability` - The number of the god's ability to display, displays all if empty or unresolvable
       - `0` or `passive` for Passive Ability
       - `1-3` for Abilities 1-3
       - `4` or `ult` or `ultimate` for Ultimate Ability
   - `@returns` - A message embed displaying the god's ability or abilities
  #### `/lore {god?}`
   - `@optional-param god` - The name or title of the god to display, gives a random god if input cannot be resolved or is empty
   - `@returns` - A message embed displaying the god's lore
---