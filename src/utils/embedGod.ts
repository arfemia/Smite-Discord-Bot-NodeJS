import { CacheType, ColorResolvable, CommandInteraction, MessageEmbed } from "discord.js";

export default function embedGod(god: {Name: string, Title: string, godIcon_URL: string, Roles: string, Pantheon: string}, interaction: CommandInteraction<CacheType>) {

    const { user } = interaction;

    const embed = new MessageEmbed()
        .setTitle(god.Name);
    embed.setDescription(god.Title)

    embed.setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
    });
    embed.setThumbnail(god.godIcon_URL);
   
    embed.addField("God Type", god.Roles, true);
    embed.addField("Pantheon", god.Pantheon, true);
    embed.setFooter({
        text:
            "Request sent: " +
            new Date().toLocaleDateString(),
    });

    return embed;
}