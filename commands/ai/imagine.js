export default class ImagineCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'imagine'; }
  async execute(msg, args) {
    const prompt = args.join(' ');
    if (!prompt) { await this.bot.sendMessage(msg.chat.id, '❌ Prompt'); return; }
    await this.bot.sendMessage(msg.chat.id, '🎨 Imagine: ' + prompt);
  }
}
