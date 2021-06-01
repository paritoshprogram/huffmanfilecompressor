
export class {minheap}


class tree{

   constructor(){
     
      this.data;
      this.freq;
      this.left=null;
      this.right=null;
   }

}

class minheap{

constructor(){

     this.size;
     this.capacity;
     this.heap=[];
}

insert(value) {
   this.heap.push(value);
   this.bubbleUp();
}

size() {
   return this.heap.length;
}

empty(){
   return ( this.size()===0 );
}


bubbleUp() {
   let index = this.size() - 1;

   while (index > 0) {
       let element = this.heap[index],
           parentIndex = Math.floor((index - 1) / 2),
           parent = this.heap[parentIndex];

       if (parent[0] >= element[0]) break;
       this.heap[index] = parent;
       this.heap[parentIndex] = element;
       index = parentIndex
   }
}

extractMax() {
   const max = this.heap[0];
   const tmp = this.heap.pop();
   if(!this.empty()) {
       this.heap[0] = tmp;
       this.minheapify(0);
   }
   return max;
}


 minheapify(ix)

 {
    var small = ix;
    var l = 2*ix +1;

    var r = 2*ix+2;

    if(this.heap[l]<this.heap[ix] && l<this.size)
    {
       small=l;
    }

    if(this.heap[r]<this.heap[ix] && l<this.size)
    {
       small=r;
    }

    if(small!=ix)
    {
       var temp= this.ar[small];
       this.heap[small]=this.heap[ix];
       this.heap[ix]=temp;
    }

    minheapify(small);


 }


}



