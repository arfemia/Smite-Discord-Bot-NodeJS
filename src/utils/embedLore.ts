import { CacheType, CommandInteraction, MessageEmbed } from "discord.js";
import { SmiteGod } from "./embedGod";

export default function embedLore(god: SmiteGod, interaction: CommandInteraction<CacheType>) {

    const embed = new MessageEmbed()

    embed.setThumbnail(god.godIcon_URL);

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
}