class HashTable {
  public table;
  public size: number;

  constructor() {
    this.table = new Array(123);
    this.size = 0;
  }

  public set(key: string, value: any) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  public get(key: string): string {
    const index = this._hash(key);
    return this.table[index];
  }

  public remove(key: string) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }

  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}

const newHash = new HashTable();
newHash.set("maçã", 22);
newHash.set("uva", 22);
newHash.set("uvas", 23);
console.log(newHash.table);
console.log(newHash.get("uva"));
