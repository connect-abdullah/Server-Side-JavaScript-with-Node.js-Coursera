const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;

   // write logic here 
   // Used this Condtion here to avoid unnessary computations.
   if(cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieInTake <= 0){
       return weightLostInAMonth = -1;
    }
   
   let cyclingBurnInOneHour = cycling * 2;
   let runningBurnInOneHour = running * 2;
   let swimmingBurnInOneHour = swimming * 2;
   
   let caloriesBurnInOneWeek = cyclingBurnInOneHour + runningBurnInOneHour + swimmingBurnInOneHour;
   
   let caloriesBurnInAMonth = caloriesBurnInOneWeek * 4;
   
   extraCalories = extraCalorieInTake * 30;
   
   weightLostInAMonth = (caloriesBurnInAMonth - extraCalories) / 1000;
   
   return weightLostInAMonth;
   
}

module.exports = calculateWeightLostInAMonth

