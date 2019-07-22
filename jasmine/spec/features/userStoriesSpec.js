describe("User Stories", function() {

  beforeEach(function() {
    var airport = jasmine.createSpyObj("airport");
    var plane = jasmine.createSpyObj("plane");
    var weatherReporter = jasmine.createSpyObj("weatherReporter");
  });

  describe("when not stormy", function() {
    beforeEach(function() {
      var weatherReporter = jasmine.createSpyObj("weatherReporter", "isStormy");
      weatherReporter.isStormy.and.callFake(function() {
        return false;
      });
    });
  });
    // As an air traffic controller
    // So planes can land safely at my airport
    // I would like to instruct a plane to land
    it("so planes land at airports, instruct a plane to land", function() {
      expect(airport.land(plane)).not.toThrow("Cannot land plane: weather is stormy")
    });
});
