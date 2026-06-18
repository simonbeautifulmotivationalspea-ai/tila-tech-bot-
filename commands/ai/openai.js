export default class OpenAICommand {
  constructor(bot, config) { this.bot = bot; this.name = 'openai'; }
  async execute(msg, args) {
    const query = args.join(' ');
    if (!query) { await this.bot.sendMessage(msg.chat.id, '❌ Ask'); return; }
    await this.bot.sendMessage(msg.chat.id, '🔗 OpenAI: ' + query);
  }
}
