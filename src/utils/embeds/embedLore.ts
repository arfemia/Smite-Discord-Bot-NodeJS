import { MessageEmbed } from "discord.js";
import { EmbedGodOptions } from "./EmbedGodOptions";
import getRoleColor from "../smite/getRoleColor";

export default function embedLore(options: EmbedGodOptions) {

  const { god, random } = options;
  const lore = String(god.Lore).replace(/\\n/g, '\n')
 
  const embed = new MessageEmbed()
    .setTitle(`${god.Name} - ${god.Title}`)
  embed.setAuthor({name: `${random ? 'Random ' : ''}Lore`, iconURL: god.godIcon_URL});
  if (god.Lore.length > 4090) {
    embed.setDescription(lore.substring(0, 4090) + '...')
    embed.setFooter({ text: lore.substring(4091, lore.length > 4090 + 2048 ? 4090 + 2048 : lore.length) })
  }
  else {
    embed.setDescription(lore)
  }

  embed.setColor(getRoleColor(god.Roles));

  return embed;
}