import { CacheType, ColorResolvable, CommandInteraction, MessageEmbed } from "discord.js";

export default function embedGod(god: string[], interaction: CommandInteraction<CacheType>) {

    const { user } = interaction;

    const embed = new MessageEmbed()
        .setTitle(god[0]);

    embed.setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
    });
    embed.setThumbnail(god[3]);
    embed.setColor(god[4] as ColorResolvable)
    embed.addField("God Type", god[1], true);
    embed.addField("Pantheon", god[2], true);
    embed.setFooter({
        text:
            "Request sent: " +
            new Date().toLocaleDateString(),
    });

    return embed;
}