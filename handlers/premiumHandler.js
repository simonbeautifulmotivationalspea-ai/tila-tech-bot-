export default class PremiumHandler {
  constructor() {
    this.premiumUsers = new Set();
  }
  async isPremium(userId) { return this.premiumUsers.has(userId); }
}
