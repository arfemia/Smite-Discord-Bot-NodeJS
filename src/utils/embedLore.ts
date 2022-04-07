import { CacheType, CommandInteraction, MessageEmbed } from "discord.js";
import { SmiteGod } from "./embedGod";

export default function embedLore(god: SmiteGod, interaction: CommandInteraction<CacheType>) {

    const embed = new MessageEmbed()
    embed.setTitle(`${god.Name} Lore`)
    embed.setThumbnail(god.godIcon_URL);
    if (god.Lore.length > 4090) {
        embed.setDescription(god.Lore.substring(0, 4090) + '...')
        embed.setFooter({ text: god.Lore.substring(4091, god.Lore.length > 4090 + 2048 ? 4090 + 2048 : god.Lore.length) })
    }
    else {
        embed.setDescription(god.Lore)
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