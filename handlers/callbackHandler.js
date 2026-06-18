export default class CallbackHandler {
  constructor(bot, config) {
    this.bot = bot;
    this.callbacks = new Map();
  }
  register(id, callback) { this.callbacks.set(id, callback); }
}
