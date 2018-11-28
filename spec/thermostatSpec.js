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

        it('Can increase temperature', function() {
            thermostat.increaseTemperature();
            expect(thermostat.temperature).toEqual(21);
        });

        it('Can decrease temperature', function() {
            thermostat.decreaseTemperature();
            expect(thermostat.temperature).toEqual(19);
        });
    });
});
