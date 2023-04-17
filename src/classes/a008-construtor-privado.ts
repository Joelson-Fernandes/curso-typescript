/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-constructor */

// Singleton - GoF | Factory method - GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('retornando instancia já criada');
      return Database.database;
    }
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const connect1 = Database.getDatabase('localhost', 'root', '123456');
connect1.connect();
const connect2 = Database.getDatabase('localhost', 'root', '123456');
connect2.connect();

console.log(connect1 === connect2);
