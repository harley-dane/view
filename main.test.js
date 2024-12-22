import Multiply from "./main.js";


describe("multiply two numbers", ()=>{
    it("should multiply two numbers", () =>{
        expect (Multiply(2, 5)).toEqual(10);
    })
}) 

