export default class RuntimeCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'runtime'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, `⏱️ ${process.uptime()}s`);
  }
}
