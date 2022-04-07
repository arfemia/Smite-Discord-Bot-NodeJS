import { CacheType, CommandInteraction, MessageEmbed } from "discord.js";
import { SmiteGod } from "./embedGod";

export default function embedLore(god: SmiteGod, interaction: CommandInteraction<CacheType>) {

    const lore = String(god.Lore).replace('\n\n', '      ')
    
    const embed = new MessageEmbed()
        .setTitle(`Lore --- ${god.Name} `)
    embed.setThumbnail(god.godIcon_URL);
    if (god.Lore.length > 4090) {
        embed.setDescription(lore.substring(0, 4090) + '...')
        embed.setFooter({ text: lore.substring(4091, lore.length > 4090 + 2048 ? 4090 + 2048 : lore.length) })
    }
    else {
        embed.setDescription(lore)
    }

    switch (god.Roles) {
        case 'Hunter':
            embed.setColor(0xFBC719)
            break;
        case 'Guardian':
            embed.setColor(0x6CFF93)
            break;
        case 'Mage':
            embed.setColor(0x198DFB)
            break;
        case 'Assassin':
            embed.setColor(0x8B19FB)
            break;
        case 'Warrior':
            embed.setColor(0xFF5733)
            break;
    }

    return embed;
}