function updateProductNumber(product,price,isIncreasing){
    const inputNumber =document.getElementById(product+'-number');
    let inputValue = inputNumber.value;
    
    if(isIncreasing == true){
        inputValue = parseInt(inputValue) + 1;
    }
    else if(inputValue>0){
       inputValue = parseInt(inputValue) - 1;
    }
    inputNumber.value = inputValue;

    const totalValueText = document.getElementById(product+'-price');
    totalValueText.innerText = parseInt(inputValue) * price;

     calculateSubTotal();
}



function getInputValue(product){
    const inputValueText = document.getElementById(product+'-number');
    const inputValue = inputValueText.value;
     return inputValue;
}

function calculateSubTotal(){
    const phoneTotal = getInputValue('phone')*1219;
    const caseTotal = getInputValue('case')*59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal*0.1;
    const totalNumber =subTotal+tax;
    document.getElementById('sub-total').innerText =subTotal;
    document.getElementById('tax-number').innerText = tax;
    document.getElementById('total-number').innerText = totalNumber;

    // subTotalValue.innerText = parseInt(subTotal);

}

document.getElementById('case-plus').addEventListener('click',function(){
    // const inputNumber =document.getElementById('input-number');
    // const inputValue = inputNumber.value;
    // inputNumber.value = parseInt(inputValue) + 1;
    updateProductNumber('case',59,true);
  
})


document.getElementById('case-minus').addEventListener('click',function(){
    // const inputNumber =document.getElementById('input-number');
    // const inputValue = inputNumber.value;
    // inputNumber.value = parseInt(inputValue) - 1;
    updateProductNumber('case',59,false); 

    
})

document.getElementById('phone-plus').addEventListener('click',function(){
updateProductNumber('phone',1219,true);
    
})

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
        
    })


