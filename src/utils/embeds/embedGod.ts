import { MessageEmbed } from "discord.js";
import { EmbedGodOptions } from "./EmbedGodOptions";
import getRoleColor from "../smite/getRoleColor";

export default function embedGod(options: EmbedGodOptions) {

  const { god, interaction, random } = options
  const { user } = interaction;


  const embed = new MessageEmbed()
    .setTitle(`${random ? 'Random God: ' : ''} ${god.Name}`);
  embed.setDescription(god.Title)
  embed.setImage(god.godCard_URL)
  embed.setAuthor({
    name: user.tag,
    iconURL: user.displayAvatarURL(),
  });

  embed.setThumbnail(god.godIcon_URL);
  embed.addField("Type", god.Type, true)
  embed.addField("Role", god.Roles, true);
  embed.addField("Pantheon", god.Pantheon, true);

  embed.setColor(getRoleColor(god.Roles));
  embed.setFooter({
    text:
      "Request sent: " +
      new Date().toLocaleDateString(),
  });

  return embed;
}