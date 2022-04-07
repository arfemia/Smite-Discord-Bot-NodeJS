import { CacheType, ColorResolvable, CommandInteraction, MessageEmbed } from "discord.js";

export type SmiteGod = {
    Name: string,
    Title: string,
    godIcon_URL: string,
    godCard_URL: string,
    Roles: string, // Warrior, Guardian etc.
    Pantheon: string,
    Type: string, //Melee, Physical
    Lore: string, // long text
}

export default function embedGod(god: SmiteGod, interaction: CommandInteraction<CacheType>) {

    const { user } = interaction;

    const embed = new MessageEmbed()
        .setTitle(god.Name);
    embed.setDescription(god.Title)
    embed.setImage(god.godCard_URL)
    embed.setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
    });

    embed.setThumbnail(god.godIcon_URL);
    embed.addField("Type", god.Type, true)
    embed.addField("Role", god.Roles, true);
    embed.addField("Pantheon", god.Pantheon, true);

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
    embed.setFooter({
        text:
            "Request sent: " +
            new Date().toLocaleDateString(),
    });

    return embed;
}