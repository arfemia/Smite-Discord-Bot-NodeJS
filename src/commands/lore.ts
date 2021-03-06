import { SlashCommandBuilder } from "@discordjs/builders";
import gods from "../config/smite/gods.json";
import { Command } from "../interfaces/Command";
import embedLore from "../utils/embeds/embedLore";
import getRandomGod from "../utils/smite/getRandomGod";


export const lore: Command = {
  data: new SlashCommandBuilder()
    .setName('lore')
    .setDescription('Displays a smite god`s lore.')
    .addStringOption((option) =>
      option
        .setName("god")
        .setDescription("god name or blank for random")
        .setRequired(false)
    ),
  run: async (interaction) => {
    await interaction.deferReply();


    const god = (interaction.options.getString("god", false) || 'random').toLowerCase()



    if (god === 'random') {

      const god = getRandomGod()

      const lore = embedLore({ god, interaction, random: true })
      await interaction.editReply({ embeds: [lore], })
    }
    else {
      let godFound = false;
      for (let i = 0; i < gods.length; i++) {
        if (gods[i].Name.toLowerCase().includes(god) || gods[i].Title.toLowerCase().includes(god)) {
          godFound = true;
          const god = gods[i]

          const lore = embedLore({ god, interaction })
          await interaction.editReply({ embeds: [lore], })
          break;
        }
      }

      if (!godFound) {
        const god = getRandomGod()

        const lore = embedLore({ god, interaction, random: true })
        await interaction.editReply({ embeds: [lore], })
      }
    }
  }
}

