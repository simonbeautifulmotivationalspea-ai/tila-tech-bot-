export default class VersionCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'version'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, '🔖 Version: 1.0.0');
  }
}
