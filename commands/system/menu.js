export default class MenuCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'menu'; }
  async execute(msg) {
    const keyboard = {
      inline_keyboard: [
        [{ text: '🔧 System', callback_data: 'menu_system' }],
        [{ text: '🤖 AI', callback_data: 'menu_ai' }]
      ]
    };
    await this.bot.sendMessage(msg.chat.id, '📋 Menu', { reply_markup: keyboard });
  }
}
