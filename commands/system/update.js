export default class UpdateCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'update'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, '🔄 Checking for updates...');
  }
}
