export default class StatusCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'status'; }
  async execute(msg) {
    const mem = Math.round(process.memoryUsage().heapUsed / 1024 / 1024);
    const text = `📊 **Status**\nMemory: ${mem}MB\nUptime: ${Math.floor(process.uptime())}s`;
    await this.bot.sendMessage(msg.chat.id, text, { parse_mode: 'Markdown' });
  }
}
