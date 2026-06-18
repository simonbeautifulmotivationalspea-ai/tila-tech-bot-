export default class SettingsConfig {
  constructor() {
    this.language = 'en';
    this.timezone = 'UTC';
    this.features = { aiCommands: true, games: true, economy: true, moderation: true };
  }
}
