export default class PingCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'ping'; }
  async execute(msg) {
    const start = Date.now();
    const sent = await this.bot.sendMessage(msg.chat.id, '🏓 Pong!');
    const time = Date.now() - start;
    await this.bot.editMessageText(`🏓 Pong!\n⚡ ${time}ms`, {
      chat_id: msg.chat.id, message_id: sent.message_id
    });
  }
}
