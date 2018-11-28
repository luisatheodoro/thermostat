describe('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('Temperature',function() {
        it('Can change the default temparature', function() {
            thermostat.changeDefaultTemperature(30);
            expect(thermostat.temperature).toEqual(30);
        });
    });
});