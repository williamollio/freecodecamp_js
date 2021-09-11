function checkCashRegister(price, cash, cid) {

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
    let object = {
        status : "",
        change : [],
    }
    let change = cash - price;
    let change_original = change
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
    console.log(Math.floor(sum))

    // for (let elem of cid){
    //     console.log(unit[elem[0]])
    //     console.log(elem[0])
    // }

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
 ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])