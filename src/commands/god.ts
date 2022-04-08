import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import embedGod from "../utils/embeds/embedGod";
import getGod from "../utils/smite/getGod";



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

    const godArg = (interaction.options.getString("god", false) || 'random').toLowerCase();

    const { god, random: random } = getGod(godArg)
    const embed = embedGod({ god, interaction, random })

    await interaction.editReply({ embeds: [embed], })


  }
}

