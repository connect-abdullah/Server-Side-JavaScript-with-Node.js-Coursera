let empDetails = [
    {id:1,name:"Roger",salary:50000,Bonus:1000,appraisal:80},
    {id:2,name:"David",salary:55000,Bonus:1000,appraisal:70},
    {id:3,name:"Alison",salary:65000,Bonus:1000,appraisal:90},
    {id:4,name:"Anthony",salary:70000,Bonus:1000,appraisal:95},
    {id:5,name:"Kristen",salary:80000,Bonus:1000,appraisal:98},
];

// 1. Function to sort employee details by name
function arrangeEmpDetails(data) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
}

// 2. Display all employee details in a specific format
const displayEmp = empDetails.map((emp) => {
    return `${emp.id} ---- ${emp.name} ---- ${emp.salary}`;
});

// 3. Display the total income of employees whose names start with 'A'
const totalsal = empDetails
    .filter(emp => emp.name.startsWith('A'))
    .reduce((total, emp) => total + emp.salary + emp.Bonus, 0);

// 4. Find maximum appraisal score and determine the hike percentage (returns a Promise)
function getAppraisalPct(maxappraisalscore) {
    return new Promise((resolve, reject) => {
        // Check if the parameter is null or undefined and reject with an Error object
        if (maxappraisalscore === undefined || maxappraisalscore === null) {
            resolve(new Error("Missing appraisal score"));  // Reject with Error object
        } 
        // If appraisal score is >= 100
        else if (maxappraisalscore >= 100) {
            resolve('20% hike to be given');
        } 
        // If appraisal score is between 90 and 100
        else if (maxappraisalscore > 90 && maxappraisalscore < 100) {
            resolve('10% hike to be given');
        } 
        // If appraisal score is between 85 and 90
        else if (maxappraisalscore > 85 && maxappraisalscore <= 90) {
            resolve('5% hike to be given');
        } 
        // Otherwise, return non-eligible message
        else {
            resolve('Unfortunately, you are not eligible for a hike');
        }
    });
}


// Find the maximum appraisal score from the employee details
let maxappraisalscore = empDetails.reduce((max, emp) => emp.appraisal > max ? emp.appraisal : max, 0);

console.log('Sorted Employee Details:', arrangeEmpDetails(empDetails));
console.log('Employee Details in Specific Format:', displayEmp);
console.log('Total Salary of Employees Starting with A:', totalsal);

// Call the getAppraisalPct function
getAppraisalPct(maxappraisalscore)
    .then((result) => {
        console.log('Appraisal Percentage Hike:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

module.exports = {
    arrangeEmpDetails,
    getAppraisalPct,
};
