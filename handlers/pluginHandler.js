export default class PluginHandler {
  constructor(bot, config) {
    this.bot = bot;
    this.plugins = new Map();
  }
  getPlugin(name) { return this.plugins.get(name); }
}
