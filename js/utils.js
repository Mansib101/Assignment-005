
function input_value(id){
    const amount = document.getElementById(id).value;
    return amount;
}

function donation_function(card_id, input_id){
    const d_money = parseFloat(input_value(input_id));
    if (isNaN(d_money) || d_money<0){
        alert("Invalid Input. Please type in proper amount");
    }
    else{
        current_total = parseFloat(document.getElementById('total-amount').innerText);
        new_total = current_total-d_money;
        if (new_total<0){
            alert('You dont have sufficient balance!');
        }
        else{
            const nkh_total = parseFloat(document.getElementById(card_id).innerText);
            const new_nkh_total = nkh_total + d_money;
            document.getElementById('total-amount').innerText = new_total;            
            document.getElementById(card_id).innerText = new_nkh_total;
        }
    }

}
