import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
  console.error(chalk.red('BOT_TOKEN not found'));
  process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

bot.on('message', async (msg) => {
  try {
    const text = msg.text;
    if (text === '/ping') {
      await bot.sendMessage(msg.chat.id, '🏓 Pong!');
    } else if (text === '/help') {
      await bot.sendMessage(msg.chat.id, '📚 Commands: /ping, /status, /help');
    } else if (text === '/status') {
      await bot.sendMessage(msg.chat.id, '✅ Bot Online');
    }
  } catch (error) {
    console.error(error);
  }
});

bot.getMe().then(info => {
  console.log(chalk.green(`Bot started: @${info.username}`));
}).catch(err => {
  console.error(chalk.red(`Error: ${err}`));
  process.exit(1);
});

export default bot;
