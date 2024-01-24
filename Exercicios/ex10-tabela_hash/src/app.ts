class hashTable {
  public table;
  public size: number;

  constructor() {
    this.table = new Array(123);
    this.size = 0;
  }

  private _hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
}
