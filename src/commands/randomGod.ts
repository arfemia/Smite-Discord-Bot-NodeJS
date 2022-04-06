import { SlashCommandBuilder } from "@discordjs/builders";
import { ColorResolvable, MessageEmbed } from "discord.js";
import { all_gods } from "../config/smite/gods";
import { Command } from "../interfaces/Command";
import embedGod from "../utils/embedGod";
import getRandomGod from "../utils/getRandomGod";


export const randomGod: Command = {
    data: new SlashCommandBuilder()
        .setName('randomgod')
        .setDescription('Displays a random god'),
        
    run: async (interaction) => {
        await interaction.deferReply();

        const embed = embedGod(getRandomGod(), interaction);
        await interaction.editReply({embeds: [embed]})
        
        
    }
}

