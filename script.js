document.getElementById('claculate').addEventListener('click', function () {
    //income
    const income = document.getElementById('income');
    const incomeValue = income.value;
    const numberIncomeValue =parseFloat(incomeValue);


    //rent
    const rent = document.getElementById('rent'); //console.log();
    const rentValue = rent.value;
    const numberRentValue = parseFloat(rentValue);
    
    //food
    const food = document.getElementById('food'); //console.log();
    const foodValue = food.value;
    const numberFoodValue = parseFloat(foodValue);
  
    //others
    const others = document.getElementById('others'); //console.log();
    const othersValue = others.value;
    const numberOthersValue = parseFloat(othersValue);
  
    //Expencess
    
    const totalExpencess = numberRentValue + numberFoodValue + numberOthersValue;
    
    //total-expencess
    const findExpences = document.getElementById('total-expencess');
    findExpences.innerText = totalExpencess;

    
    //Find - Balance
   
    const findBalance = numberIncomeValue - totalExpencess;
//show-balance
    const balance = document.getElementById('balance');
    balance.innerText = findBalance;

    
});

document.getElementById('save').addEventListener('click',function(){
   
     //income
     const income = document.getElementById('income');
     const incomeValue = income.value;
     const numberIncomeValue =parseFloat(incomeValue);
     //another
    const rent = document.getElementById('rent'); //console.log();
    const rentValue = rent.value;
    const numberRentValue = parseFloat(rentValue);
  
    //food
    const food = document.getElementById('food'); //console.log();
    const foodValue = food.value;
    const numberFoodValue = parseFloat(foodValue);
    
    //others
    const others = document.getElementById('others'); //console.log();
    const othersValue = others.value;
    const numberOthersValue = parseFloat(othersValue);
    
    //Expencess
    
    const totalExpencess = numberRentValue + numberFoodValue + numberOthersValue;
    const findBalance = numberIncomeValue - totalExpencess;
    console.log(typeof findBalance);

    const textSaving = document.getElementById('saving');
    const savingAmount = textSaving.value;
    const numberSaving = parseFloat(savingAmount);
    
    
   const savingCount = ((numberSaving * numberIncomeValue) / 100);
   console.log( typeof savingCount);
    //saving amount
    const saveAmount = document.getElementById('saving-amount');
    saveAmount.innerText = savingCount;

    
    const remainBalance = (findBalance - savingCount);
    console.log(typeof remainBalance);
    
    //remaing balance;
    const remainFinal = document.getElementById('remain-balance');
    remainFinal.innerText = remainBalance;
    
});