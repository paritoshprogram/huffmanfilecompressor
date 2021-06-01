//<script type="text/javascript">
import  {minheap} from "./huffman.js";



		document.getElementById('inputfile')
			.addEventListener('change', function() {
			
			var fr=new FileReader();
			fr.onload=function(flevent){
				const text = document.getElementById('output');
						text.textContent=fr.result;
						const data=flevent.target.result;
						console.log(data);
						if(data.length ===0){alert("empty"); return;}
 
						function encode(data)
			{
			
				let charMap = new Map();
				const count = 0;
				 for (const key of data) {
				  charMap.set(key,count);  
				 }
			   
				 for (const key of data) {
				   let count = charMap.get(key);
				   charMap.set(key, count + 1);
				 }
			
				 for (const [key,value] of charMap) {
				   console.log(key,value);
				 }
			
			
           this.heap = new minheap();

			for(const key in charMap)

           {
                this.heap.insert([charmap[key],key]);


		   }

		   while(this.heap.size()>1)
		   {
			   const node1 = this.heap.extractMax();
			   const node2 = this.heap.extractMax();

			   console.log(node1+ " " +node2);

			   const node = [node1[0]+node2[0],[node1,node2]];

			   this.heap.insert(node);
		   }

             const last = this.heap.extractMax();
    
          








		}
			encode(data);


           

            			

			}
			
			
			//const uploadedFile = this.files[0];

			var str1 = [1,1,2,3,2,1,2,3,1];

			fr.readAsText(this.files[0]);

			
			
			
		})
	//</script>