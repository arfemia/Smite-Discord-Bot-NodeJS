import { bold, italic } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { EmbedItemOptions } from "./EmbedItemOptions";


export default function embedItem(options: EmbedItemOptions) {

  const { item, interaction, random } = options;
  const { ItemDescription } = item;
  const embed = new MessageEmbed()
  const price = 'Price: ' + item.Price
  const itemDescription = italic(ItemDescription.Description || '') + '\n\n' + highlightKeywords(ItemDescription.SecondaryDescription || '')
  const description = ItemDescription.Description && ItemDescription.Description.toLowerCase() !== item.ShortDesc.toLowerCase() ?
    item.ShortDesc + '\n\n' + itemDescription :
    item.ShortDesc + '\n\n' + itemDescription
  const fields = ItemDescription.Menuitems.map(item => ({name: item.Description, value: item.Value, inline: true}))

  embed.setTitle(item.DeviceName);
  //embed.setAuthor({name: item.ShortDesc})
  embed.setThumbnail(item.itemIcon_URL)
  embed.setDescription(description)
  embed.addField('Price', String(item.Price), true)
  embed.addFields(fields)

  return embed


}

function highlightKeywords (text: string): string {
  let newText = '';
  if (text.startsWith('PASSIVE')) {
    newText = bold('PASSIVE') + text.substring('PASSIVE'.length)
  }

  return newText;
} 


