export default class OwnerConfig {
  constructor() {
    this.ownerId = parseInt(process.env.BOT_OWNER) || 0;
    this.sudoUsers = [];
  }
  isOwner(userId) { return userId === this.ownerId; }
  addSudo(userId) { if (!this.sudoUsers.includes(userId)) this.sudoUsers.push(userId); }
}
