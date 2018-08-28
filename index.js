function produceDrivingRange(blockRange){

  return function(starting, ending){
    let end = parseInt(ending)
    let start = parseInt(starting)
    let trip = Math.abs(end - start)
    if (trip > blockRange){
      return `${trip - blockRange} blocks out of range`
    } else  {
      return `within range by ${Math.abs(trip-blockRange)}`
    }

  }
}


function produceTipCalculator(percentage){

  return function(fare) {
    return fare * percentage
  }
}
