export default class DatabaseConfig {
  constructor() {
    this.type = process.env.DB_TYPE || 'json';
    this.json = { dir: './database' };
  }
}
