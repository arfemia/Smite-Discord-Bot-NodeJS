import { CacheType, ColorResolvable, CommandInteraction, MessageEmbed } from "discord.js";

type SmiteGod = {
    Name: string,
    Title: string,
    godIcon_URL: string,
    Roles: string, // Warrior, Guardian etc.
    Pantheon: string,
    Type: string //Melee, Physical
}

export default function embedGod(god: SmiteGod, interaction: CommandInteraction<CacheType>) {

    const { user } = interaction;

    const embed = new MessageEmbed()
        .setTitle(god.Name);
    embed.setDescription(god.Title)

    embed.setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
    });
    embed.setThumbnail(god.godIcon_URL);
    embed.addField("", god.Type)
    embed.addField("God Type", god.Roles, true);
    embed.addField("Pantheon", god.Pantheon, true);
    embed.setFooter({
        text:
            "Request sent: " +
            new Date().toLocaleDateString(),
    });

    return embed;
}