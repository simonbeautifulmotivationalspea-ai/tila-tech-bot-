export default class MetaAICommand {
  constructor(bot, config) { this.bot = bot; this.name = 'metaai'; }
  async execute(msg, args) {
    const query = args.join(' ');
    if (!query) { await this.bot.sendMessage(msg.chat.id, '❌ Ask'); return; }
    await this.bot.sendMessage(msg.chat.id, '🔷 Meta AI: ' + query);
  }
}
