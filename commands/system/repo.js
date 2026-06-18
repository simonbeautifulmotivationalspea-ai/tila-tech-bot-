export default class RepoCommand {
  constructor(bot, config) { this.bot = bot; this.name = 'repo'; }
  async execute(msg) {
    const url = 'https://github.com/simonbeautifulmotivationalspea-ai/tila-tech-bot-';
    await this.bot.sendMessage(msg.chat.id, `📦 [Repository](${url})`, { parse_mode: 'Markdown' });
  }
}
