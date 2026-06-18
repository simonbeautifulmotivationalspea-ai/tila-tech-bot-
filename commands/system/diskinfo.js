export default class DiskInfoCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'diskinfo'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, '💾 Disk info available');
  }
}
