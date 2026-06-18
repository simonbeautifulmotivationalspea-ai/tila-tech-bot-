export default class CPUInfoCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'cpuinfo'; }
  async execute(msg) {
    const cpu = process.cpuUsage();
    await this.bot.sendMessage(msg.chat.id, `CPU: ${JSON.stringify(cpu)}`);
  }
}
