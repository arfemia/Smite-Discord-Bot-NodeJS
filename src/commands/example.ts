import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { COMMAND_PREFIX } from "../config/prefixes";
import { Command } from "../interfaces/Command";

export const command: Command = {
    data: new SlashCommandBuilder()
        .setName('100')
        .setDescription('test')
        .addStringOption((option) =>
            option
                .setName("message")
                .setDescription("sample desc")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply();

        const { user } = interaction;
        const text = interaction.options.getString("message", true);

        const oneHundredEmbed = new MessageEmbed();
        oneHundredEmbed.setTitle("embed title");
        oneHundredEmbed.setDescription(text);
        oneHundredEmbed.setAuthor({
            name: user.tag,
            iconURL: user.displayAvatarURL(),
        });
        oneHundredEmbed.addField("Round", text, true);
        oneHundredEmbed.addField("lowercase", text.toLowerCase(), true);
        oneHundredEmbed.setFooter({
            text:
                "Day completed: " +
                new Date().toLocaleDateString(),
        });

        await interaction.editReply({ embeds: [oneHundredEmbed] });
    }
}