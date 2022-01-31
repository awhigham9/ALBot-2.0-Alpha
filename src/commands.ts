import fs from "fs";
import path from "path";
import { ICommand } from "./icommand";

const commandDir = "commands";
const commands: ICommand[] = [];

const commandFiles = fs.readdirSync(path.join(__dirname, commandDir))
                        .filter((file : string) => file.endsWith('.ts'));
for (const file of commandFiles) {
	const command: ICommand = require(`./commands/${file}`).default;
	commands.push(command);
}

export default commands; // array of commands