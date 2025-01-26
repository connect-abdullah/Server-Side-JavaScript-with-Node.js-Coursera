// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        if(math && english && science && social && language){
            resolve(math+english+science+social+language)
        }else{
            reject("Null values for marks")
        }
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        if(totalMarks){
            resolve(totalMarks/5)
        }else{
            reject("Total marks are required")
        }
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>{
    return new Promise((resolve,reject)=>{
        if(averageMarks === undefined || averageMarks === null){
            reject("Average marks are required")
        }

        if(averageMarks >= 95) {
            resolve("A+")
        } else if (averageMarks >= 85 && averageMarks <= 94) {
            resolve("A")
        } else if (averageMarks >= 70 && averageMarks <= 84) {
            resolve("B")
        } else if (averageMarks >= 60 && averageMarks <= 69) {
            resolve("C")
        } else if (averageMarks >= 50 && averageMarks <= 59) {
            resolve("E")
        } else {
            resolve("F")
        }
    
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
