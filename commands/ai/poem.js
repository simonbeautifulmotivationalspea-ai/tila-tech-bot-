export default class PoemCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'poem'; }
  async execute(msg, args) {
    const theme = args.join(' ');
    if (!theme) { await this.bot.sendMessage(msg.chat.id, '❌ Theme'); return; }
    await this.bot.sendMessage(msg.chat.id, '✨ Poem: ' + theme);
  }
}
