export default class CommandHandler {
  constructor(bot, config) {
    this.bot = bot;
    this.config = config;
    this.commands = new Map();
  }
  async handleCommand(msg) {
    const args = msg.text.split(' ');
    const cmd = args[0].substring(1).toLowerCase();
    this.bot.sendMessage(msg.chat.id, `Command: ${cmd}`);
  }
}
