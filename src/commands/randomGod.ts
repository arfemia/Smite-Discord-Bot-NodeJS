import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import embedGod from "../utils/embedGod";
import embedLore from "../utils/embedLore";
import getRandomGod from "../utils/getRandomGod";


export const randomGod: Command = {
    data: new SlashCommandBuilder()
        .setName('randomgod')
        .setDescription('Displays a random god'),
        
    run: async (interaction) => {
        await interaction.deferReply();

        const god = getRandomGod()
        const embed = embedGod(god, interaction);
        const lore = embedLore(god, interaction)
        await interaction.editReply({embeds: [embed, lore]})
        
        
    }
}

