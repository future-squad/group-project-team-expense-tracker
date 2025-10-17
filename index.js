let appData = {
  members: [],
  expenses: [],
  nextExpenseId: 1
};

function saveData(){
    localStorage.setItem("teamData", JSON.stringify(appData))
    console.log("✅ Data saved to localStorage.");
}

function loadData(){
    const storedData = localStorage.getItem("teamData")
    if(storedData){
        appData = JSON.parse(storedData)
        console.log("✅ Data Loaded From LocalStorage")
    }
    else{
        console.log("ℹ️ No Saved Data Found")
    }
}
function clearData(){
    localStorage.removeItem("teamData")
    appData = {members:[], expenses: [], nextExpenseId: 1}
    console.log("All saved data cleared from localstorage")
}

appData.members.push("Adnan")
appData.expenses.push({id: appData.nextExpenseId++, description: "Text Expense", paidBy: "Hassan", amount: 500})

saveData()
loadData()

console.table