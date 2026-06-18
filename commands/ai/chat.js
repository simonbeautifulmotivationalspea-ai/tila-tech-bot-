export default class ChatCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'chat'; }
  async execute(msg, args) {
    const text = args.join(' ');
    if (!text) { await this.bot.sendMessage(msg.chat.id, '❌ Say'); return; }
    await this.bot.sendMessage(msg.chat.id, '💬 ' + text);
  }
}
