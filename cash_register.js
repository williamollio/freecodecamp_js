function checkCashRegister(price, cash, cid) {

    /* Array with the price unity */
    const unit = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY",0.01]
    ]
    /* Object to return */
    let object = {
        status : "",
        change : [],
    }
    /* Calcul of the due change */
    let change = cash - price;
    let change_original = change

    /* Creation of an array with the following structure :
    ** [0] = sum of all [i][0] in cid
    ** [1] = sum of all [i][1] in cid */
    let temp_sum = cid.reduce((a,b) => a.map((c,i) => c + b[i]))
    let sum = temp_sum[1].toFixed(2)

    console.log("sum : " + sum)
    console.log("change : " + change)

    if (change == sum){
        object.status = "CLOSED"
        // add the change
        console.log(object);
    }
    // also the exact change can't be returned
    else if (change > sum){
        object.status = "INSUFFICIENT_FUNDS"
        console.log(object)
    }

    cid.reverse()
    
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
 ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])