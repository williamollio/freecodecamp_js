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

    /* Sum of the cid array */
    let sum = temp_sum[1].toFixed(2)

    let given = 0;
    let times = 0;

    console.log("sum : " + sum)
    console.log("change : " + change)


    cid.reverse()
    console.log(cid)
    let i
    for (i = 0; i < unit.length; i++)
    {
        if (cid[i][0] != 0 && unit[i][1] < change)
        {
            times = cid[i][1] / unit[i][1];
            while (times-- && unit[i][1] <= change)
            {
                given += unit[i][1];
                change -= unit[i][1];
            }
            if (change == 0)
                break;
        }
    }
    object.status = "OPEN"
    object.change = cid[i]
    console.log(object)
    // if (change_original == sum) {
    //     object.status = "CLOSED"
    //     object.change = cid
    //     return object
    // }

    // else if (change_original > sum) {
    //     object.status = "INSUFFICIENT_FUNDS"
    //     return object
    // }
}
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])