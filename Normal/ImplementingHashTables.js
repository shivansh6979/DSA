class HashTable { 
constructor(size){
   this.data = new Array(size);
}

_hashKey(key){
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
}

set(key,value){
  let address = this._hashKey(key)
  if(!this.data[address]){
    this.data[address] = []
  }
  this.data[address].push([key,value])
}

get(key){
  let address = this._hashKey(key)
  let currentBucket = this.data[address]
  if(currentBucket){
     for(let i = 0; i < currentBucket.length ; i++ ){
    if(currentBucket[i][0] == key){
      return currentBucket[i][1]
    }
  }
  }
  
  return undefined
}
}

const myHashTable = new HashTable(2);
myHashTable.set('grapes',1000)
myHashTable.set('apples',2000)

console.log('after setting',myHashTable)
const extractedValue =myHashTable.get('d')
console.log('extractedValue',extractedValue)





