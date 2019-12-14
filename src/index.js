
	
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
	var result=0;
	var sum=a+b+c+3;
	var multi=a*b*c+3;
	if (sum>multi){
		result=sum;
	}else {
		result=multi;
	}
	return result;
};
const assesstudent =(rate) => {
	var result;
	if(rate<0 || rate>100){
		return result="не правилная оченка"
	}else if (rate>=0 && rate<20){
		result="ваша оченка F"
	}else if (rate>=20 && rate<40){
		result="ваша оченка E"
	}else if (rate>=40 && rate<60){
		result="ваша оченка D"
	}else if (rate>=60 && rate<75){
		result="ваша оченка C"
	}else if (rate>=75 && rate<90){
		result="ваша оченка B"
	}else if (rate>=90 && rate<=100){
		result="ваша оченка A"
	}
	return result;
}
