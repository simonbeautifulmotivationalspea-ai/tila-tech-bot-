export default class SupportCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'support'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, '📞 Support: Contact owner');
  }
}
