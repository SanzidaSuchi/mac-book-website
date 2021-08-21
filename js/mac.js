// Dom  
const macBookPrice= document.getElementById('Best-price');
    const memoryCost = document.getElementById('Extra-Memory');
    const storageCost = document.getElementById('Extra-Storage');
    const deliveryCost = document.getElementById('Delivery-Charge');
    const total = document.getElementById('total-price');
//  memory      
document.getElementById('cost-memory0').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0; 
    totalCalc();
})
document.getElementById('cost-memory16').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Memory');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180; 
    totalCalc();
})
// storage
document.getElementById('cost-storage256').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0; 
    totalCalc();
})
document.getElementById('cost-storage512').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 100; 
    totalCalc();
})
document.getElementById('cost-storage1TB').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Extra-Storage');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 180; 
    totalCalc();
})

// delivary charge
document.getElementById('free-delivery').addEventListener('click',  function(){
    const oldPrice = document.getElementById('total-price');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 0; 
    totalCalc();
})
document.getElementById('charge-delivery').addEventListener('click',  function(){
    const oldPrice = document.getElementById('Delivery-Charge');
    const updatePrice = oldPrice.innerText;
    oldPrice.innerText = 20; 
    totalCalc();
})
// Total calculation  
function totalCalc() {
    const defaultPrice = parseInt(document.getElementById("Best-Price").innerText);
    const memoryExpense = parseInt(document.getElementById('Extra-Memory').innerText);
    const storageExpense = parseInt(document.getElementById('Extra-Storage').innerText);
    const deliveryExpense = parseInt(document.getElementById('Delivery-Charge').innerText);
    const total = document.getElementById('total-price');
//    calculation  
    total.innerText = defaultPrice + memoryExpense + storageExpense + deliveryExpense ;
    total.innerText = GrandTotal;
}

/* ------------------------------------------------------------------------- */
//promo calculation
document.getElementById('apply-btn').addEventListener('click',
function () {
    // discount calculation
    const totalPrice = document.getElementById('total-price');
    const beforePromoTotal = parseInt(totalPrice.innerText);
    const ApplyingPromoTotal = beforePromoTotal-(beforePromoTotal * 0.2);
    //where to set
    const total = document.getElementById('promo-total');
    const inputField = document.getElementById('input-field');
    if (inputField.value == 'stevekaku') {
        total.innerText = ApplyingPromoTotal;
        inputField.value ='';
    }
    else {
        total.innerText = beforePromoTotal;
        inputField.value ='';
    }
})