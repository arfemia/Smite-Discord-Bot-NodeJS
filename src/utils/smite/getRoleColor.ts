export default function (role: string) {
  let embed = 0xccc;
  switch (role) {
    case 'Hunter':
      embed = 0xFBC719
      break;
    case 'Guardian':
      embed = 0x6CFF93
      break;
    case 'Mage':
      embed = 0x198DFB
      break;
    case 'Assassin':
      embed= 0xdca
      break;
    case 'Warrior':
      embed = 0xFF5733
      break;
  }

  return embed;
}