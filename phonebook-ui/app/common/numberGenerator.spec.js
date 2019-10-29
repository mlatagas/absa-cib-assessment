describe( 'number generator service', function() {

  var numberGeneratorService;

  beforeEach( module( 'myApp.service.numberGenerator' ) );

  beforeEach(inject(function($injector) {
    numberGeneratorService = $injector.get('numberGeneratorService');
}));

  it('should generate different numbers when called', function() {
    
    var firstNumber = numberGeneratorService.generateNumber();

    expect(firstNumber).toBeDefined();
    
    var secondNumber = numberGeneratorService.generateNumber();

    expect(secondNumber).not.toBe(firstNumber);

});

});

