import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import embedGod from "../utils/embeds/embedGod";
import getRandomGod from "../utils/smite/getRandomGod";


export const randomGod: Command = {
  data: new SlashCommandBuilder()
    .setName('randomgod')
    .setDescription('Displays a random god'),

  run: async (interaction) => {
    await interaction.deferReply();

    const god = getRandomGod()
    const embed = embedGod({ god, interaction, random: true });

    await interaction.editReply({ embeds: [embed,] })


  }
}

