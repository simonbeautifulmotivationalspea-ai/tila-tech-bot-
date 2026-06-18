export default class SecurityConfig {
  constructor() {
    this.enabled = true;
    this.rateLimit = 30;
    this.antiSpam = { enabled: true, threshold: 5 };
  }
}
