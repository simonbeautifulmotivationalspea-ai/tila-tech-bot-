export default class GPTCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'gpt'; }
  async execute(msg, args) {
    const query = args.join(' ');
    if (!query) { await this.bot.sendMessage(msg.chat.id, '❌ Ask'); return; }
    await this.bot.sendMessage(msg.chat.id, '🔹 GPT: ' + query);
  }
}
