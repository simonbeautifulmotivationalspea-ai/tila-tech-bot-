export default class FluxCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'flux'; }
  async execute(msg, args) {
    const prompt = args.join(' ');
    if (!prompt) { await this.bot.sendMessage(msg.chat.id, '❌ Prompt'); return; }
    await this.bot.sendMessage(msg.chat.id, '⚡ Flux: ' + prompt);
  }
}
