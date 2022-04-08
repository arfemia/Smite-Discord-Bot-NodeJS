
import { ButtonInteraction, CommandInteraction } from "discord.js";

export interface ButtonCommand {

  run: (interaction: ButtonInteraction) => Promise<void>;
}