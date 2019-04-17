'use strict';

describe('Plane',function(){

  var plane;
  var airport;
  
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding']); //spys are doubles. creates airport that can accept method clearForLanding
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
});
