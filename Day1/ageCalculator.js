var calcAge = function (name,date) {
    
    var today = new Date()
    var birthDate = new Date(date)
   
    if (birthDate.getFullYear() >= 2020)
        return "you are too young"
    else
    { 
        var age = today.getFullYear() - birthDate.getFullYear()
        var m = today.getMonth() - birthDate.getMonth();
       
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
            throw new Error("Invalid date");
        }

        return `Hello ${name} your age is ${age}` 
    }   
} 
module.exports = calcAge