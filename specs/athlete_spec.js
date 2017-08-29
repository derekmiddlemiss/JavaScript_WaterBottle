var assert = require("assert");
var Athlete = require("../athlete.js");
var WaterBottle = require("../water_bottle.js");

describe( "Athlete", function(){

  it( "should have a hydration of 100 at creation", function(){
    var bolt = new Athlete();
    // console.log( bolt );
    assert.strictEqual( bolt.hydration, 100 );
  });

  it( "should have zero distance at creation", function(){
    var bolt = new Athlete();
    // console.log( bolt );
    assert.strictEqual( bolt.distance, 0 );
  })

  it( "should be able to run, dec hydration, inc distance", function(){
    var bolt = new Athlete();
    bolt.run();
    // console.log( bolt );
    assert.strictEqual( bolt.hydration, 90 );
    assert.strictEqual( bolt.distance, 10 );
  })

  it( "should be able to run, dec hydration, inc distance", function(){
    var bolt = new Athlete();
    for ( var i = 0; i < 20; i++ ){
      bolt.run();
    }
    console.log( bolt );
    assert.strictEqual( bolt.hydration, 0 );
    assert.strictEqual( bolt.distance, 100 );
  })

  it( "should be able to rehydrate by drinking from a water bottle", function(){
    var bolt = new Athlete();
    var bottle = new WaterBottle();
    bottle.fill();
    console.log( bottle );
    bolt.drink( bottle );
    console.log( bottle );
    assert.strictEqual( bolt.hydration, 110 );
    assert.strictEqual( bottle.volume, 90 );
  })

} );