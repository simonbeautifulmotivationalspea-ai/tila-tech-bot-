export default class MathCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'math'; }
  async execute(msg, args) {
    const expr = args.join(' ');
    if (!expr) { await this.bot.sendMessage(msg.chat.id, '❌ Math'); return; }
    await this.bot.sendMessage(msg.chat.id, '🧮 ' + expr);
  }
}
