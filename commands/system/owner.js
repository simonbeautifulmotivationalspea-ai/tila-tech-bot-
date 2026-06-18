export default class OwnerCommand {
  constructor(bot, config) { this.bot = bot; this.config = config; this.name = 'owner'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, `👤 Owner: ${this.config.ownerId}`);
  }
}
