import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { all_gods } from "../config/smite/gods";
import { Command } from "../interfaces/Command";


export const command: Command = {
    data: new SlashCommandBuilder()
        .setName('god')
        .setDescription('Displays basic Smite God Info')
        .addStringOption((option) =>
            option
                .setName("god")
                .setDescription("god name or random")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply();

        const { user } = interaction;
        const god = interaction.options.getString("god", true);

        if (god.toLowerCase() === 'random') {
            const randomIndex = Math.floor(Math.random() * all_gods.length);
            const randomGod = all_gods[randomIndex]
            
            const embed = new MessageEmbed();
            embed.setTitle(randomGod[0]);
            
            embed.setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL(),
            });
            embed.addField("God Type", randomGod[1], true);
            embed.addField("Pantheon", randomGod[2], true);
            embed.setFooter({
                text:
                "Request sent: " +
                new Date().toLocaleDateString(),
            });
            
            await interaction.editReply({ embeds: [embed] });
        }
    }
}