class LinkedList{
  constructor(value){
    this.head = {
      value : value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
}

const mylinkedList = new LinkedList(10)
console.log('List:', mylinkedList)