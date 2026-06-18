export default class EssayCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'essay'; }
  async execute(msg, args) {
    const topic = args.join(' ');
    if (!topic) { await this.bot.sendMessage(msg.chat.id, '❌ Topic'); return; }
    await this.bot.sendMessage(msg.chat.id, '📝 Essay: ' + topic);
  }
}
