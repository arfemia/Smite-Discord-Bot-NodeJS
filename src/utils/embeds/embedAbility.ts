import { bold,  } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { getRoleColor } from "../smite";
import { EmbedGodOptions } from "./EmbedGodOptions";

type index = 1 | 2 | 3 | 4 | 5


export default function embedAbility(options: EmbedGodOptions, abilityNo?: number) {

  const abilities = [];

  // specified ability => displays one ability
  if (abilityNo !== (null || undefined) && (abilityNo === 1 || abilityNo === 2 || abilityNo === 3 || abilityNo === 4 || abilityNo === 5)) {
    const embed = embedSingleAbility(options, abilityNo)
    abilities.push(embed)
  }

  // display all abilities
  else {
    for (let i = 1; i < 6; i++) {
      const embed = embedSingleAbility(options, i as index)
      abilities.push(embed)
    }
  }

  return abilities;
}

export function embedSingleAbility(options: EmbedGodOptions, abilityNo: index) {
  const { god } = options
  const embed = new MessageEmbed()
  const name = god[`Ability${abilityNo}`]
  const ability = god[`Ability_${abilityNo}`]
  const abilityIcon = god[`godAbility${abilityNo}_URL`]
  const title = abilityNo == 5 ? god.Name + ' Passive' : abilityNo == 4 ? god.Name + ' Ultimate' : god.Name + ' ' + abilityNo 
  const abilityDescription = ability.Description.itemDescription


  embed.setAuthor({ name: `${name}`, iconURL: god.godIcon_URL });
  embed.setTitle(bold(title))
  embed.setColor(getRoleColor(god.Roles))
  embed.setDescription(ability.Description.itemDescription.description)
  embed.setThumbnail(abilityIcon);
  if (abilityDescription.cooldown) {
    embed.addField("Cooldown", abilityDescription.cooldown || 'thanks hirez', true)
  }
  if (abilityDescription.cost) {
    embed.addField("Cost", abilityDescription.cost || 'thanks hirez', true)
  }

  if (abilityDescription.menuitems && abilityDescription.menuitems.length >= 1) {
    const items = abilityDescription.menuitems.map(item => ({name: item.description, value: item.value, inline: true}))
    embed.addFields(items)
  }

  if (abilityDescription.rankitems && abilityDescription.rankitems.length >= 1) {
    const items = abilityDescription.rankitems.map(item => ({name: item?.description || 'n/a', value: item?.value || 'n/a', inline: true}))
    embed.addFields(items)
  }
  //embed.addField("Cooldown", ability.Description.itemDescription.rankitems, false)

  return embed
}