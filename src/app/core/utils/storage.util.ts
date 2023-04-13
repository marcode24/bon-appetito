export default class Storage {

  static getItem(key: string): string | any {
    return localStorage.getItem(key);
  }

  static saveLocalStorage(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  static deleteLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

}
