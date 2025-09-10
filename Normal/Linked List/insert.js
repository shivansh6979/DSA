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

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    if (index === 0) {
      return this.prepend(value)
    }

    const newNode = {
      value,
      next: null,
    }

    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
}

const mylinkedList = new LinkedList(10)
mylinkedList.append(20)
mylinkedList.prepend(5)
mylinkedList.insert(1,1000)
mylinkedList.printList()
console.log("List:", mylinkedList.printList())
