// class MyArray {
//   constructor() {
//     this.length = 0
//     this.data = {}
//   }
//   get(index) {
//     return this.data[index]
//   }
//   push(item) {
//     this.data[this.length] = item
//     this.length++
//   }
//   pop() {
//     const lastItem = this.data[this.length -1]
//     delete this.data[this.length -1]
//     this.length--
//     return lastItem
//   }
//   deleteAtIndex(index) {
//     const item = this.data[index]
//     this.shiftItems(index)
//     return item
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length -1; i++) {
//       this.data[i] = this.data[i+1]
//     }

//     delete this.data[this.length -1]
//     this.length--
//   }
// }

// const theArr = new MyArray()
// theArr.push('Hi')
// theArr.push('there')
// theArr.push('!')
// theArr.deleteAtIndex(1)
// console.log(theArr)

function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    const newNode = new Node(value);
    if (this.head === undefined) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }
}
