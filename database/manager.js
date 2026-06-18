import fs from 'fs';
import path from 'path';
export default class DatabaseManager {
  constructor() {
    this.dbDir = './database';
  }
  async readFile(filePath) {
    try {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch { return null; }
  }
  async writeFile(filePath, data) {
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return true;
    } catch { return false; }
  }
}
