// Deque Data Structure

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class Deque{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    enqueue(val){
        const node = new Node(val);
        if(!this.tail){
            this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    enqueue_front(val){
        const node = new Node(val);
        if(!this.head){
            this.head = this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    dequeue(){
        if(!this.head){
            console.log("Empty Deque");
            return null;
        }
        else{
            let dequed = this.head;
            const next = this.head.next;     
            if(next) next.prev = null;
            this.head.next = null;
            this.head = next
            if(!this.head) this.tail = null;
            return dequed.data;
        }
    }

    dequeue_back(){
        if(!this.tail){
            console.log("Empty Deque");
            return null;
        }
        else{
            const dequed = this.tail;
            const prev = this.tail.prev;
            if(prev) prev.next = null;
            this.tail.prev = null;
            this.tail = prev;
            if(!this.tail) this.head = null;
            return dequed.data;
        }
    }

    front(){
        return this.head ? this.head.data : null;
    }

    back(){
        return this.tail ? this.tail.data : null;
    }

    isEmpty(){
        return this.head === null;
    }
}

const deque = new Deque();

deque.enqueue(1);
console.log(deque.isEmpty())
console.log(deque.dequeue_back());