import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageActionRow, MessageButton, MessageSelectMenu } from "discord.js";
import { Command } from "../interfaces/Command";
import embedItem from "../utils/embeds/embedItem";
import getItem from "../utils/smite/getItem";
import getItemTree from "../utils/smite/getItemTree";

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
    const { items, random } = getItem(itemArg, itemArg == 'random');
    const itemsEmbed = embedItem({ item: items[0], interaction, random })
    const itemTree = getItemTree(items[0])

    const itemTreeEmbed = itemTree.map(i => embedItem({ item: i, interaction, random }))

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('/item tree')
          .setLabel('Show full item tree')
          .setStyle('PRIMARY')
          ,
      );
    const filter = (i: any) => i.customId === '/item tree'
    const collector = interaction.channel?.createMessageComponentCollector({ filter })
    collector?.on('collect', async (i) => {
      if (i.customId === '/item tree') {
        //await i.deferReply()
        //await i.editReply({ content: 'Showing full item tree for ' + items[0].DeviceName, components: [] })
        await interaction.editReply({ embeds: itemTreeEmbed, components: [] })
      }
    })



    await interaction.editReply({ embeds: [itemsEmbed,], components: [row] })
  }
}