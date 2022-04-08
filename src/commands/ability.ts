import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interfaces/Command";
import { embedAbility } from "../utils/embeds";
import { getGod } from "../utils/smite";


type index = 1 | 2 | 3 | 4
export const ability: Command = {
  data: new SlashCommandBuilder()
    .setName('ability')
    .setDescription('Displays a god`s ability')
    .addStringOption((option) =>
      option
        .setName("god")
        .setDescription("God name or title (i.e. 'Ares' or 'god of war' - random if blank)")
        .setRequired(false)
    )
    .addStringOption((option) =>
      option
        .setName("ability")
        .setDescription("`0` or `passive` | `1-3`  | `4` or `ult` or `ultimate`")
        .setRequired(false)

    ),


  run: async (interaction) => {
    await interaction.deferReply();

    const godArg = (interaction.options.getString("god", false) || 'random').toLowerCase();
    const abilityArg = (interaction.options.getString("ability", false) || 'all').toLowerCase();
    const { god, random } = getGod(godArg);

    if (abilityArg === 'all') {

      const abilities = embedAbility({ god, interaction, random });
      await interaction.editReply({ embeds: abilities, })
      return;
    }

    if (abilityArg === 'passive' || abilityArg === '5') {
      const abilities = embedAbility({ god, interaction, random }, 5);
      await interaction.editReply({ embeds: abilities, })
      return;
    }

    if (abilityArg === 'ult' || abilityArg === 'ultimate') {
      const abilities = embedAbility({ god, interaction, random }, 4);
      await interaction.editReply({ embeds: abilities, })
      return;
    }

    const abilities = embedAbility({ god, interaction, random }, Number(abilityArg) as index);
    await interaction.editReply({ embeds: abilities, })
    return;






  }
}

