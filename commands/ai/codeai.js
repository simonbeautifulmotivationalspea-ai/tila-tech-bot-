export default class CodeAICommand {
  constructor(bot, config) { this.bot = bot; this.name = 'codeai'; }
  async execute(msg, args) {
    const query = args.join(' ');
    if (!query) { await this.bot.sendMessage(msg.chat.id, '❌ Code'); return; }
    await this.bot.sendMessage(msg.chat.id, '💻 Code: ' + query);
  }
}
