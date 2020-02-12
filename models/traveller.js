const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const results=this.journeys.map(trip=>{
    return trip.startLocation
  })
  return results
};

Traveller.prototype.getJourneyEndLocations = function () {
  const results=this.journeys.map(trip=>{
    return trip.endLocation
  })
  return results
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const results=this.journeys.filter(trip=>{
    return trip.transport === transport
  })
  return results
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const results=this.journeys.filter(trip=>{
    return trip.distance > minDistance
  })
  return results
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const results=this.journeys.map(trip=>trip.distance);
  return results.reduce((tripTotal,total)=>tripTotal+total)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const results=this.journeys.map(trip=>{
    return trip.transport;
  })
  const unique=new Set(results)
  const result= Array.from(unique)
  return result
}



module.exports = Traveller;
