
function makeCounter() 
{
	return function() 
	{
		this.count = 1; 
		this.obj = function(){
			this.count+=1; 
		};
		this.set = function(n){
			this.count=n;
		};
		this.get = function(){
			return (this.count);
		}; 
		this.reset = function(){ 
		this.count=1; 
		}; 
	}; 
};
 

var counter1 = new makeCounter();
counter1();
console.log(counter1.get()); // 2
counter1.set(10);
counter1();
console.log(counter1.get()); // 11
console.log(counter1()); // 11
counter1.reset();
console.log(counter1.get()); // 1
