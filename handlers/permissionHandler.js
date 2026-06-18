export default class PermissionHandler {
  constructor(config) {
    this.config = config;
  }
  async checkPermission(userId) {
    return userId === this.config.ownerId;
  }
}
