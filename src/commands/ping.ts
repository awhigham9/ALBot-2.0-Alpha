import { BaseCommandInteraction } from "discord.js";
import { ICommand } from "../icommand";

export const Ping: ICommand = {
    name: "ping",
    description: "Replies with pong!",
    type: "CHAT_INPUT",
    execute: async (interaction: BaseCommandInteraction) => {
        await interaction.reply('Pong!');
    }
}
