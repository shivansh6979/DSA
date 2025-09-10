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

  prepend(value){
    const newNode = {
        value,
        next: this.head
    }
    this.head = newNode
    this.length++
    return this
  }
}

const mylinkedList = new LinkedList(10)
mylinkedList.append(20)
mylinkedList.prepend(5)
console.log("List:", mylinkedList)
