export default class UptimeCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'uptime'; }
  async execute(msg) {
    const uptime = Math.floor(process.uptime());
    const d = Math.floor(uptime / 86400);
    const h = Math.floor((uptime % 86400) / 3600);
    const m = Math.floor((uptime % 3600) / 60);
    await this.bot.sendMessage(msg.chat.id, `⏱️ ${d}d ${h}h ${m}m`);
  }
}
