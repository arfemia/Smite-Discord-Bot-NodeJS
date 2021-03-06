import { CacheType, CommandInteraction } from "discord.js";
import SmiteGod from "../../models/SmiteGod";

export interface EmbedGodOptions {
  god: SmiteGod,
  interaction: CommandInteraction<CacheType>,
  random?: boolean
}