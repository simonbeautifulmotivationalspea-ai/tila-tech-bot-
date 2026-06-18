export default class CooldownHandler {
  constructor() {
    this.cooldowns = new Map();
  }
  isOnCooldown(userId, cmd) {
    if (!this.cooldowns.has(cmd)) this.cooldowns.set(cmd, new Map());
    return Date.now() < (this.cooldowns.get(cmd).get(userId) || 0);
  }
}
