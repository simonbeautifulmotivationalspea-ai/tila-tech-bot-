export default class AliveCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'alive'; }
  async execute(msg) {
    const uptime = Math.floor(process.uptime());
    await this.bot.sendMessage(msg.chat.id, `✅ ONLINE\nUptime: ${uptime}s`);
  }
}
