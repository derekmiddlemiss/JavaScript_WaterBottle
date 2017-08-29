
var Athlete = function(){
  this.hydration = 100;
  this.distance = 0;
}

Athlete.prototype = {

  run: function(){
    if ( this.hydration >= 10 ){
      this.hydration -= 10;
      this.distance += 10;
    }
  },

  drink: function( bottle ){
    this.hydration += bottle.drink()
  }

}

module.exports = Athlete;