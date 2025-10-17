<<<<<<< HEAD
//  Feature-Member
let appData = {
    members: [],
    expenses: [],
    nextExpenseId: 1
};
function addMember(name) {
    const lowerName = name.toLowerCase();

    for (let member of appData.members) {
        if (member.toLowerCase() === lowerName) {
            console.log(`❌ ${name} already exists.`);
            return;
        }
    }

    appData.members.push(name);
    console.log(`✅ Member added: ${name}`);
    saveData();
}

function listMembers() {
    console.table(appData.members);
}
=======



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
>>>>>>> ali-code
