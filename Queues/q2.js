// Implement Queue Using LinkedList

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(val){
        const node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node;
            this.tail = node
        } 
    }

    dequeue(){
        if(this.head){
            const next = this.head?.next || null;
            const deHead = this.head;
            this.head.next = null;
            this.head = next
            return deHead.data;
        }
        else{
            return null;
        }
    }

    top(){
        return this.head ? this.head.data : null;
    }
}

const queue = new Queue();