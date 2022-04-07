import { SlashCommandBuilder } from "@discordjs/builders";
import { ColorResolvable, MessageEmbed } from "discord.js";
import gods from "../config/smite/gods.json";
import { Command } from "../interfaces/Command";
import embedGod from "../utils/embedGod";
import embedLore from "../utils/embedLore";
import getRandomGod from "../utils/getRandomGod";


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

            const god = getRandomGod()
            const embed = embedGod(god, interaction);
            const lore = embedLore(god, interaction)
            await interaction.editReply({ embeds: [embed, lore], })
        }
        else {
            let godFound = false;
            for (let i = 0; i < gods.length; i++) {
                if (god === gods[i].Name.toLowerCase() || gods[i].Title.toLowerCase().includes(god)) {
                    godFound = true;
                    const god = gods[i]
                    const embed = embedGod(god, interaction);
                    const lore = embedLore(god, interaction)
                    await interaction.editReply({ embeds: [embed, lore], })
                    break;
                }
            }

            if (!godFound) {
                const god = getRandomGod()
                const embed = embedGod(god, interaction);
                const lore = embedLore(god, interaction)
                await interaction.editReply({ embeds: [embed, lore], })
            }
        }
    }
}

