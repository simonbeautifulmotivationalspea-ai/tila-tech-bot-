export default class ScriptCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'script'; }
  async execute(msg) {
    await this.bot.sendMessage(msg.chat.id, '📜 Script handler');
  }
}
