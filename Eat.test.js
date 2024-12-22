import Daiet  from "./Eat";


// test Diet

describe("Diets",() =>{
    
    it("should return daily schedule diet",() =>{
        expect (Daiet("Monday")).toEqual("Eat: Rice and chicken");
        expect  (Daiet("Tuesday")).toEqual("Eat: Rice and Beans");
        expect  (Daiet("Wednesday")).toEqual("Eat: Salad and Eggs");
        expect  (Daiet("Thursday")).toEqual("Bread and Beans");
        expect  (Daiet("Friday")).toEqual("Pizza and Coca cola");
        expect  (Daiet("Saturday")).toEqual("Beans soup");
        expect  (Daiet("Sunday")).toEqual("peper soup");
        expect (Daiet("")).toEqual("invalid day");

    })
})