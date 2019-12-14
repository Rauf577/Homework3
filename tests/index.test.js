describe('', () => {
    it('should ...', () => {
        
    });
})
  
describe("summormultiply", function() {
    it("передаем а = 4,передаем b = 10" , function() {
        assert.equal(summormultiply(4, 10), 40);
    });
    it("передаем а = 3,передаем b = 5" , function() {
        assert.equal(summormultiply(3, 5), 8);
        });
   });

   describe("getcoordinate", function() {
    it("если 'x' и 'y' больше чем 0, должен быть возвращен 1-й четверти " , function() {  
        assert.equal(getcoordinate(1,3),"x и y находится   1-й четверти" );  
    })
    it("если  'x' меньше 0 и  'y' больше чем 0, должен быть возвращен 2-й четверти " , function() {  
        assert.equal(getcoordinate(-1,3),"x и y находится 2-й четверти" );  
    })   
    it("если 'x' и 'y' меньше чем 0, должен быть возвращен 3-й четверти " , function() {  
        assert.equal(getcoordinate(-4,-3),"x и y находится 3-й четверти" );  
    }) 
    it("если  'x' больше 0 и  'y' меньше  чем 0, должен быть возвращен 4-й четверти " , function() {  
        assert.equal(getcoordinate(1,-3),"x и y находится 4-й четверти" );  
    })
    it("если 'x' равно 0 и 'y' не равно 0, должен быть на линии y  " , function() {  
        assert.equal(getcoordinate(0,-3),"должен быть на линии y" );  
    })
    it("если 'x' равно 0 и 'y' равно 0, должен быть на линии x  " , function() {  
        assert.equal(getcoordinate(0,0),"должен быть на центр" );  
    }) 
   
});

describe("getpositivesumm", function() {
    it(" передаем a = 1,передаем b = 3, передаем  c= 5", function() {
        assert.equal(getpositivesumm(1, 3, 5), 9);
    });   
    it(" передаем а = 1,передаем b = 3 передаем c =-5" , function() {
        assert.equal(getpositivesumm(1,3,-5), 4);
        });

    it(" передаем а = 1,передаем b = -3 передаем c = 5" , function() {
        assert.equal(getpositivesumm(1,-3,5), 6);
        });
    it(" передаем а = -1,передаем b = 3 передаем c = 5" , function() {
        assert.equal(getpositivesumm(-1,3, 5), 8);
        });    
   });

describe("getsumormultmax",function(){
    it(" передаем a = 1,передаем b = 3 передаем c = 5", function(){
        assert.equal(getsumormultmax(1,3,5),18);
    });
    it(" передаем a = 1,передаем b = 2 передаем c = 2",function(){
        assert.equal(getsumormultmax(1,2,2),8);
    })
});
describe("assesstudent",function(){
    it("если оценки студента меньше 20 и  больше 0 ", function(){
        assert.equal(assesstudent(17),"ваша оченка F")
    })
    it("если оценки студента меньше 40 и  больше или равно 20 ", function(){
        assert.equal(assesstudent(23),"ваша оченка E")
    })  
    it("если оценки студента меньше 60 и  больше или равно 40 ", function(){
        assert.equal(assesstudent(57),"ваша оченка D")
    })
    it("если оценки студента меньше 75 и  больше или равно 60 ", function(){
        assert.equal(assesstudent(65),"ваша оченка C")
    })
    it("если оценки студента меньше 90 и  больше или равно 75 ", function(){
        assert.equal(assesstudent(77),"ваша оченка B")
    })
    it("если оценки студента равно или меньше 100 и  больше или равно 90 ", function(){
        assert.equal(assesstudent(99),"ваша оченка A")
    })
} )
describe()