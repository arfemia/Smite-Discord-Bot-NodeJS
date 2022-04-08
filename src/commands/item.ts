import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageActionRow, MessageSelectMenu } from "discord.js";
import { Command } from "../interfaces/Command";
import embedItem from "../utils/embeds/embedItem";
import getItem from "../utils/smite/getItem";

export const item: Command = {

  data: new SlashCommandBuilder()
    .setName('item')
    .setDescription('Displays an item or items')
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("Type in the shop to find your item, random item if blank")
        .setRequired(false)
    )
  ,
  run: async (interaction) => {
    await interaction.deferReply();

    const itemArg = (interaction.options.getString("query") || 'random').toLowerCase()
    const {items, random} = getItem(itemArg, itemArg == 'random');
    const itemsEmbed = embedItem({item: items[0], interaction, random})

    const selectionRow = new MessageActionRow().addComponents(new MessageSelectMenu()
      .setCustomId('item-action')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: '1223',
          value: 'asd'
          
        },
        {
          label: '2',
          value: 'aaa'
        }
      ]))

    await interaction.editReply({embeds: [itemsEmbed], components: []})
  }
}