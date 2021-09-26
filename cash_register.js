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

    let i = 0
    let times = 0;
    let given = 0;
    let sum_given = 0
    let temp_arr = [...unit]
    cid.reverse()

    for (i; i < unit.length; i++)
    {
            times = cid[i][1] / unit[i][1];
            while (times-- && unit[i][1] <= change)
            {
                given += unit[i][1];
                change -= unit[i][1];
                change = change.toFixed(2)
            }
            if (given > 0)
            {
                temp_arr[i][1] = given
                sum_given += given
                given = 0
            }
            else if (given == 0)
                temp_arr[i][1] = 0
    }

    if (change_original == sum){
        object.status = "CLOSED"
        object.change = cid.reverse()
        return object
    }

    else if (change_original > sum || change_original > sum_given){
        object.status = "INSUFFICIENT_FUNDS"
        return object
    }

    else{
        let final_arr = []
        for(let i = 0; i < temp_arr.length; i++)
        {
            if (temp_arr[i][1] != 0)
                final_arr.push(temp_arr[i])
        }
        object.status = "OPEN"
        object.change = final_arr
        return object
    }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20],
["TWENTY", 60], ["ONE HUNDRED", 100]])
