export default class SpeedCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'speed'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, '⚡ Speed: Fast');
  }
}
