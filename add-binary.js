// Qn: https://leetcode.com/problems/add-binary/

const addBinary =  (a,b)=>{
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);   
}
console.log(addBinary(11,1));