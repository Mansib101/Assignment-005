// Noakhali
document.getElementById('nkh-btn')
.addEventListener('click', function(){
    donation_function('nkh-total', 'nkh-input', 'Flood at Noakhalo', 'my_modal_1');
})
// Feni
document.getElementById('feni-btn')
.addEventListener('click', function(){
    donation_function('feni-total', 'feni-input', 'Flood relief in Feni', 'my_modal_2');
})
// Quota
document.getElementById('quota-btn')
.addEventListener('click', function(){
    donation_function('quota-total', 'quota-input', 'Aid for injured in Quota movement', 'my_modal_3');
})

// Donation and History page interchange btns
document.getElementById('history-page-btn')
.addEventListener('click', function(){
    document.getElementById('history-page-btn').classList.add('bg-green');
    document.getElementById('card-page-btn').classList.remove('bg-green');
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('main-section').classList.add('flex-col');       
})

document.getElementById('card-page-btn')
.addEventListener('click', function(){
    document.getElementById('card-page-btn').classList.add('bg-green');
    document.getElementById('history-page-btn').classList.remove('bg-green');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('main-section').classList.remove('flex-col');       
})