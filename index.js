
let expenses = [];

function add_Expense(amount, description, paidby) {
    if (!members.includes(paidby.toLowerCase())) {
        console.log(`Error: member: ${paidby} doesn't exist`)
        return false;
    }

    const expense = {
        amount: amount,
        description: description,
        paidby: paidby
    };

    expenses.push(expense);
    console.log("Expenses added successfully!")
    return expense;
}

function listexpenses() {
    console.table(expenses);
}

add_Expense(300,"lunch","haider");
add_Expense(500,"breaki","hassan");
add_Expense(900,"coffee","ismail");
add_Expense(100,"dinner", "adnan");
add_Expense(560,"steak","ali")




listexpenses ();







