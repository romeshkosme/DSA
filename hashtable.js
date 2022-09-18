class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  // accepts key and transforms into index value.
  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const target = this._hash(key);
    if (this.table[target]) {
      // handle index collision
      for (let index = 0; index < this.table.length; index++) {
        if (this.table[target][0] === key) {
          this.table[target][1] = value;
          return;
        }
      }
      // not found, push new key-value pair
      this.table[target].push([key, value]);
    } else {
      // first value inserted at the index
      this.table[target] = [];
      this.table[target].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let index = 0; index < this.table.length; index++) {
        if (this.table[target][index][0] === key) {
          return this.table[target][index][1];
        }
      }
    }
  }

  remove(key) {
    const target = this._hash(key);
    if (this.table[target] && this.table[target].length) {
      for (let index = 0; index < this.table.length; index++) {
        if (this.table[target][index][0] === key) {
          this.table[target].splice(index, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(([key, value]) => `[${key}: ${value}]`);
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const hashTable = new HashTable();
// hashTable.set('USA', 1)
// hashTable.set('China', 2)
// hashTable.set('Germany', 3)
// hashTable.set('India', 4)
// console.log(hashTable.get('China'))
// hashTable.remove('China')
// console.log(hashTable.get('China'))

hashTable.set("Spain", 110);
hashTable.set("ǻ", 192);
hashTable.display()
