export default class AICommand {
  constructor(bot, config) { this.bot = bot; this.name = 'ai'; }
  async execute(msg, args) {
    const query = args.join(' ');
    if (!query) { await this.bot.sendMessage(msg.chat.id, '❌ Ask something'); return; }
    await this.bot.sendMessage(msg.chat.id, '🤖 AI: ' + query);
  }
}
