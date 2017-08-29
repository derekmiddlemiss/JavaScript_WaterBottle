var WaterBottle = function(){
  this.volume = 0;
}

WaterBottle.prototype = {

  fill: function (){
    this.volume = 100;
  },

  drink: function(){
    if ( this.volume >= 10 ){
      this.volume -= 10;
      return 10;
    }
  },

  empty: function(){
    this.volume = 0;
  }

}

module.exports = WaterBottle;