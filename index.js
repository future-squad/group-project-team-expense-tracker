
let expense = [];

function addExpense(paidBy, amount, description) {

  const memberExists = appData.members.some(
    (m) => m.toLowerCase() === paidBy.toLowerCase()
  );
  if (!memberExists) {
    console.log(" Error: Member ${paidBy} doesn't exist.");
    return;
  }

  const expense = {
    id: appData.nextExpenseId++,
    paidBy,
    amount,
    description
  };

  appData.expenses.push(expense);
  console.log(" Added expense: ${description} (${amount}) by ${paidBy}");
  saveData();
}

function listExpenses() {
  console.table(appData.expenses);
}