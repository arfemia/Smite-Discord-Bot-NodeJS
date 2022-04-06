import { SlashCommandBuilder } from "@discordjs/builders";
import { ColorResolvable, MessageEmbed } from "discord.js";
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
        const god = interaction.options.getString("god", true).toLowerCase();

        if (god === 'random') {
            const randomIndex = Math.floor(Math.random() * all_gods.length);
            const randomGod = all_gods[randomIndex]

            const embed = new MessageEmbed();
            embed.setTitle(randomGod[0]);

            embed.setAuthor({
                name: user.tag,
                iconURL: user.displayAvatarURL(),
            });
            embed.setThumbnail(randomGod[3]);
            embed.setColor(randomGod[4] as ColorResolvable)
            embed.addField("God Type", randomGod[1], true);
            embed.addField("Pantheon", randomGod[2], true);
            embed.setFooter({
                text:
                    "Request sent: " +
                    new Date().toLocaleDateString(),
            });

            await interaction.editReply({ embeds: [embed] });
        }
        else {
            for (let i = 0; i < all_gods.length; i++) {
                if (god === all_gods[i][0].toLowerCase()) {
                    const embed = new MessageEmbed()
                        .setTitle(all_gods[i][0])
                        .addField("God Type", all_gods[i][1])
                        .addField("Pantheon", all_gods[i][2])
                        .setThumbnail(all_gods[i][3])
                        .setColor(all_gods[i][4] as ColorResolvable)
                        .setAuthor({
                            name: user.tag,
                            iconURL: user.displayAvatarURL(),
                        })
                        
                    await interaction.editReply({ embeds: [embed] });
                }
                break;
            }
        }
    }
}