class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    }
    this.head = newNode
    this.length++
    return this
  }
  printList() {
    let currentNode = this.head
    let arrayList = []
    while (currentNode !== null) {
      arrayList.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arrayList
  }
}

const mylinkedList = new LinkedList(10)
mylinkedList.append(20)
mylinkedList.prepend(5)
mylinkedList.printList()
console.log("List:", mylinkedList,mylinkedList.printList())
