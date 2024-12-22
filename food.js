// Daily meals

const meals =  (Day) => {
    if (Day === "Monday"){
        return "Eat: Rice and chicken"
    }else if (Day === "Tuesday"){
        return "Eat: Beans soup"
    }else{
        return "invalid day"
    }
}

export default  meals;