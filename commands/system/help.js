export default class HelpCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'help'; }
  async execute(msg) {
    const text = `📚 **Commands**\n\n/ping - Response\n/help - Help\n/status - Status`;
    await this.bot.sendMessage(msg.chat.id, text, { parse_mode: 'Markdown' });
  }
}
