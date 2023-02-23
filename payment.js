//bad 
const isPayMethod = (method) => {
    if(method === 'cash' ||
     method === 'debit card' ||
     method === 'credit card'
    ){
        return true;
    }
    return false;
} 

//good
const payMethod = ['cash','debit card','credit card'];
const isPayMethod2 = (method) => payMethod.includes(method);

console.log(isPayMethod2('cash'));
