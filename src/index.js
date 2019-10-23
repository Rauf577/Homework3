
	
const summormultiply=(a,b) => {
	if(a!=0,b!=0) 
	
	return a%2?  a+b : a*b ;
	

};
const getcoordinate = (x,y) => {
	var cordinate;	 
	if (x>0 &&y>0) {
		cordinate="x и y находится   1-й четверти"
	}else if (x<0 && y>0) {
		cordinate="x и y находится 2-й четверти"
	}else if(x<0 && y<0){
		cordinate="x и y находится 3-й четверти"
	}else if(x>0 && y<0) {
		cordinate="x и y находится 4-й четверти"
	}else if(x===0 && y!==0) {
		cordinate="должен быть на линии y" 
	}else if(x!==0 && y===0){
		cordinate="должен быть на линии x"
	}else {
		cordinate="должен быть на центр"
	}
	return cordinate;
};

const getpositivesumm =(a,b,c) => {
	var sum=0
	if (a>0 ) {
		sum+=a;
	} 
	if(b>0) {
		sum+=b;
	}
	if (c>0) {
		sum+=c;
	}  	

	return sum;
};

const getsumormultmax = (a,b,c) => {
	var sum=0

}