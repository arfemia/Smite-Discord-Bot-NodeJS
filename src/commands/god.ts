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
        .setDescription('Displays Basic Smite God Info')
        .addStringOption((option) =>
            option
                .setName("god")
                .setDescription("God name or title (i.e. 'Ares' or 'god of war' - random if blank)")
                .setRequired(false)
        ),
    run: async (interaction) => {
        await interaction.deferReply();

        const { user } = interaction;
        const god = (interaction.options.getString("god", false)|| 'random').toLowerCase();



        if (god === 'random') {

            const god = getRandomGod()
            const embed = embedGod(god, interaction, true);
           
            await interaction.editReply({ embeds: [embed],})
        }
        else {
            let godFound = false;
            for (let i = 0; i < gods.length; i++) {
                if (gods[i].Name.toLowerCase().includes(god) || gods[i].Title.toLowerCase().includes(god)) {
                    godFound = true;
                    const god = gods[i]
                    const embed = embedGod(god, interaction);
                    
                    await interaction.editReply({ embeds: [embed], })
                    break;
                }
            }

            if (!godFound) {
                const god = getRandomGod()
                const embed = embedGod(god, interaction, true);
            
                await interaction.editReply({ embeds: [embed], })
            }
        }
    }
}

