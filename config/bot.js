import dotenv from 'dotenv';
dotenv.config();
export default class BotConfig {
  constructor() {
    this.token = process.env.BOT_TOKEN;
    this.ownerId = parseInt(process.env.BOT_OWNER) || 0;
    this.username = process.env.BOT_USERNAME || 'tila_bot';
    this.environment = process.env.NODE_ENV || 'development';
  }
}
