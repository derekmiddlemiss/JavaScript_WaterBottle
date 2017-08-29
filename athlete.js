
var Athlete = function(){
  this.hydration = 100;
  
  this.distance = 0;
  
  this.run = function(){
    if ( this.hydration >= 10 ){
      this.hydration -= 10;
      this.distance += 10;
    }
  }

  this.drink = function( bottle ){
    this.hydration += bottle.drink()
  }

}


module.exports = Athlete;