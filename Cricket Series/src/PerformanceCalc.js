
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      let score = parseFloat(runs)
      let ballFaced = parseFloat(balls)
      let average = (score / ballFaced);
      let extraAverage = 0;

      if (score>30 && ballFaced <15) {
            extraAverage += 1;
      }
      if (score>50 && ballFaced <20) {
            extraAverage += 10;
      }
      if (score>100 && ballFaced <50) {
            extraAverage += 20;
      }

      if (extraAverage > 0) {
            // Apply the extra average percentage
            let newAverage = average + (average * extraAverage / 100);
        
            // Round the new average to 2 decimal places
            let roundedNumber = Math.round(newAverage * 100) / 100;
        
            return roundedNumber;
          } else {
            // Return the original average rounded to 2 decimal places
            return average;
          }
}

module.exports={PerformanceCalculator}
