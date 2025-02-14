class IntArray {
    static DEFAULT_CAPACITY = 1 << 3;

  constructor(capacity = IntArray.DEFAULT_CAPACITY) {
    if (typeof capacity === "number") {
      if (capacity < 0) throw new Error("Illegal Capacity: " + capacity);
      this.capacity = capacity;
      this.arr = new Array(capacity).fill(0);
      this.len = 0;
    } else if (Array.isArray(capacity)) {
      this.arr = [...capacity];
      this.len = capacity.length;
      this.capacity = this.len;
    } else {
      throw new Error("Invalid argument type");
    }
}
}

size(){
    return this.len === 0;
}
const ar = new IntArray(50);
ar.add(3);
ar.add(7);
ar.add(6);
ar.add(-2);

ar.sort(); // [-2, 3, 6, 7]

// Prints [-2, 3, 6, 7]
for (let i = 0; i < ar.size(); i++) console.log(ar.get(i));

// Prints [-2, 3, 6, 7]
console.log(ar.toString());
