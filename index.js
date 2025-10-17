<<<<<<< HEAD
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
=======
function generateReport() {
  if (appData.expenses.length === 0) {
    console.log("ℹ️ No expenses found!");
    return;
  }

  let totalExpenses = 0;
  let memberSpendings = {};

 
  for (let exp of appData.expenses) {
    totalExpenses += exp.amount;

    const member = exp.paidBy;
    if (!memberSpendings[member]) {
      memberSpendings[member] = 0;
    }
    memberSpendings[member] += exp.amount;
  }

  const members = Object.keys(memberSpendings);
  const avgExpense = totalExpenses / appData.members.length;

 
  let balance = {};
  for (let m of appData.members) {
    const spent = memberSpendings[m] || 0;
    balance[m] = spent - avgExpense;
  }

  console.log("\n===== TEAM EXPENSE REPORT =====");
  console.log(`Total Expenses: ${totalExpenses}`);
  console.log(`Each Member’s Share: ${avgExpense.toFixed(2)}\n`);

  console.log("Member Spending:");
  for (let m of appData.members) {
    console.log(`${m} spent ${memberSpendings[m] || 0}`);
  }

  console.log("\nBalances:")
  for (let m of appData.members) {
    const bal = balance[m];
    if (bal > 0) console.log(`${m}: +${bal.toFixed(2)} (should get back)`);
    else if (bal < 0) console.log(`${m}: ${bal.toFixed(2)} (owes money)`);
    else console.log(`${m}: Settled up`);
  }
}
>>>>>>> ismail-code
