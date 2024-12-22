import meals from "./food";

// test for the daily meals

describe("daily meals", () => {
    it("should return daily schedule meals", () => {
        expect (meals("Monday")).toEqual("Eat: Rice and chicken");
        expect (meals("Tuesday")).toEqual("Eat: Beans soup");
        expect (meals("")).toEqual("invalid day")


      })
})