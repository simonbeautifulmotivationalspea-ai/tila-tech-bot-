export default class GPT4Command {
  constructor(bot, config) { this.bot = bot; this.name = 'gpt4'; }
  async execute(msg, args) {
    const query = args.join(' ');
    if (!query) { await this.bot.sendMessage(msg.chat.id, '❌ Ask'); return; }
    await this.bot.sendMessage(msg.chat.id, '🔷 GPT-4: ' + query);
  }
}
