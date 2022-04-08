import { CacheType, CommandInteraction } from "discord.js";
import SmiteItem from "../../models/SmiteItem";

export interface EmbedItemOptions {
  item: SmiteItem,
  interaction: CommandInteraction<CacheType>,
  random?: boolean
}