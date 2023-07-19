class Node {
  constructor (value) {
    this.value = value || null;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head || null;
  }
  
  head() {
    return this.head;
  }
  
  tail() {
    let pointer = this.head;
    if (pointer) {
      while (pointer.next) {
        pointer = pointer.next
      }
    }
    return pointer
  }
  
  append(value) {
    let pointer = this.head;
    if (pointer) {
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
    }
    pointer.next = new Node(value);
  }
  
  prepend(value) {
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }
  
  size() {
    let pointer = this.head;
    if (pointer) {
      let size = 1;
      while (pointer.next !== null) {
        pointer = pointer.next;
        size += 1;
      }
      return size;
    } else {
      return 0;
    }
  }
  
  at(index) {
    let pointer = this.head;
    let count = 0;
    while (pointer !== null && count < index) {
      pointer = pointer.next;
      count += 1;
    }
    if(count === index) {
      return pointer;
    } else {
      return null;
    }
  }
  
  pop() {
    let pointer = this.head;
    while(pointer.next.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = null;
  }
  
}

let node1 = new Node(1); // 1
let node2 = new Node(2); 
node1.next = node2; // 1 -> 2

let list = new LinkedList(node1);

list.append(3); list.prepend(10); // 10 -> 1 -> 2 -> 3

list.pop(); // 10 -> 1 -> 2

console.log(list.tail()); // 2