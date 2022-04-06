import { command } from "./commands/example";
import { randomGod } from "./commands/randomGod";
import { Command } from "./interfaces/Command";

export const CommandList: Command[] = [command, randomGod];