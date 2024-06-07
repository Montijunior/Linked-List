// Node class
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // return Linked List size
  getSize() {
    return this.size;
  }

  // isEmpty() : check if list is empty
  isEmpty() {
    return this.size === 0;
  }

  // append() : add from the the tail
  append(value) {
    let node = new Node(value);
    let current = this.head;
    if (current === null) {
      this.head = new Node(value, this.head);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // prepend() : add node from the head
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  // getHead(): return first node in list
  getHead() {
    let current = this.head;
    if (current !== null) {
      return current;
    }
    return null;
  }

  // tail() : returns the last node
  tail() {
    let current = this.head;
    let previous = current;
    while (current.next) {
      if (current.next === null) {
        previous.next = current.next;
        previous = current;
        current = current.next;
      }
      current = current.next;
    }
    return current;
  }

  // at(index): return a node at index
  at(index) {
    let current = this.head;
    let count = 0;
    if (index === 0) {
      return current;
    } else {
      while (current) {
        if (count === index) {
          return current;
        }
        count++;
        current = current.next;
      }
    }
  }
  // pop() : remove the last element
  pop() {
    // to be implemented
  }

  // contains(value) : finds a value and returns true
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // find(): return the index of a node
  find(value) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return count;
      }
      count++;
      current = current.next;
    }
  }

  // toConsole() : print data to the console
  toConsole() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Extra credit methods

  // insertAt(value, index): adds a value at a given index
  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(value, this.head);
    }

    let node = new Node(value);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  // removeAt(index): remove value at given index
  removeAt(index) {
    let current = this.head;
    let previous;
    let count = 0;

    if (index > 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      this.size--;
    }
  }

  //   remove(value): remove any value from the list
  remove(value) {
    let current = this.head;
    if (current.data === value) {
      this.head = current.next;
      this.size--;
    } else {
      let previous = current;
      while (current.next) {
        if (current.data === value) {
          previous.next = current.next;
          previous = current;
          current = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }
      if (current.data === value) {
        previous.next = null;
      }
      this.size--;
    }
  }
}

const list = new LinkedList();

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.append(4);
list.append(5);
list.insertAt(10, 3);

// list.clearList();
list.removeAt(3);
list.removeAt(2);
list.remove(5);
list.toConsole();
