// Reversal of Queue

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

    front(){
        return this.head ? this.head.data : null;
    }

    isEmpty(){
        return this.head === null;
    }
}

class Stack{
    constructor(){
        this.stack = [];
    }
    push(val){
        this.stack.push(val);
    }
    pop(){
        return !this.isEmpty() ? this.stack.pop() : null; 
    }
    peek(){
        return !this.isEmpty() ? this.stack[this.stack.length - 1] : null
    }
    size(){
        return this.stack.length;
    }
    isEmpty(){
        return this.stack.length === 0;
    }
}

function reverseQueue(queue){
    const stack = new Stack();
    while(!queue.isEmpty()){
        stack.push(queue.dequeue());
    }
    while(!stack.isEmpty()){
        queue.enqueue(stack.pop())
    }
}

function reverseQueueRecursive(queue){
    if(queue.isEmpty()){
        return;
    }
    const remVal = queue.dequeue();
    reverseQueueRecursive(queue);
    queue.enqueue(remVal);
}

function printQueue(queue){
    while(!queue.isEmpty()){
        console.log(queue.dequeue());
    }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
reverseQueueRecursive(queue)
printQueue(queue)




