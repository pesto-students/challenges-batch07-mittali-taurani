import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const node = new LinkListNode(value);
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
    } else {
      this.head = node;
    }
  }

  delete(value) {
    if (this.contains(value)) {
      if (this.head.value === value) {
        if (this.head.next !== null) {
          this.head = this.head.next;
        } else {
          this.head = null;
        }
      } else {
        let previousNode = this.head;
        let deleteNode = this.head.next;
        while (deleteNode.value !== value) {
          previousNode = deleteNode;
          deleteNode = deleteNode.next;
        }
        previousNode.next = deleteNode.next;
      }
      return true;
    }
    return false;
  }

  traverse() {
    let node = this.head;
    while (node) {
      node = node.next;
    }
  }

  contains(value) {
    if (this.head) {
      if (this.head.value === value) {
        return true;
      }
      let currentNode = this.head.next;
      while (currentNode) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  length() {
    let nodeCount = 0;
    let node = this.head;
    while (node) {
      nodeCount += 1;
      node = node.next;
    }
    return nodeCount;
  }
}
