class AuthDB {
  constructor() { }

  get(key) {
    const value = localStorage.getItem(key);
    return typeof value === 'string' ? JSON.parse(value) : value;
  };

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  };

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  };

  key(n) {
    return localStorage.key(n);
  };
}

export default new AuthDB();