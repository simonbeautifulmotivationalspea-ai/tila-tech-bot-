export default class SummaryCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'summary'; }
  async execute(msg, args) {
    const text = args.join(' ');
    if (!text) { await this.bot.sendMessage(msg.chat.id, '❌ Text'); return; }
    await this.bot.sendMessage(msg.chat.id, '📄 Summary: ' + text);
  }
}
