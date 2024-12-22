//Daily diet

const Daiet =  (Day) => {
    
    if(Day === "Monday") {
        return "Eat: Rice and chicken";
    }else if(Day === "Tuesday"){
        return "Eat: Rice and Beans";

    }else if(Day === "Wednesday"){
        return "Eat: Salad and Eggs";

    }else if(Day === "Thursday"){
        return "Bread and Beans"
    }else if(Day === "Friday"){
        return "Pizza and Coca cola"
    }else if(Day === "Saturday"){
        return "Beans soup"
    }else if(Day === "Sunday"){
        return "peper soup"
    }else{
        return "invalid day"
    }
}

export default Daiet;