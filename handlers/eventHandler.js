export default class EventHandler {
  constructor(bot, config) {
    this.bot = bot;
    this.config = config;
  }
  handleMessage(msg) {
    if (msg.new_chat_members) { console.log('New members'); }
  }
}
