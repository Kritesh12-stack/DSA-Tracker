// Implement Queue Using Hashmap

class Queue{
    constructor(){
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value){
        this.queue[this.rear] = value;
        this.rear++;
    }
    
    dequeue(){
        if(this.isEmpty()) return null;
        const item = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return item;
    }

    peek(){
        if(this.isEmpty()) return null;
        return this.queue[this.front]
    }

    isEmpty(){
        return this.front === this.rear;
    }

    size(){
        return this.rear - this.front
    }
}

const queue = new Queue();
queue.enqueue(23);
queue.enqueue(2);
queue.enqueue(20);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty())