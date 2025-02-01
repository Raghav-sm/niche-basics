document.addEventListener('DOMContentLoaded', () => {
  // Selecting elements
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmntInput = document.getElementById("expense-amnt");
  const expenseList = document.getElementById("expense-list");
  const totalExpense = document.getElementById("total").querySelector("span");

  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  renderList();

  let totalAmnt = calculateTotalAmnt();

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const expenseName = expenseNameInput.value.trim();
    const expenseAmnt = parseFloat(expenseAmntInput.value.trim());

    if (expenseName != "" && !isNaN(expenseAmnt) && expenseAmnt > 0) {
      const expenseObj = {
        "id": Date.now(),
        "expenseName": expenseName,
        "expenseAmnt": expenseAmnt
      }

      expenses.push(expenseObj);
      saveToLocal();// storing it locally
      updateTotal();// update local
      renderList();
      //clear inputs
      expenseAmntInput.value = "";
      expenseNameInput.value = "";
    }
    else alert("Enter Proper Input");


  });//submit eventListener

  function calculateTotalAmnt() {
    return expenses.reduce((sum, currentObj) => sum + currentObj.expenseAmnt, 0)
  }
  function saveToLocal() {
    return localStorage.setItem('expenses', JSON.stringify(expenses));
  }
  function updateTotal() {
    let totalAmnt = calculateTotalAmnt();
    totalExpense.textContent = totalAmnt.toFixed(2);
  }

  function renderList() {
    expenseList.innerHTML = "";
    expenses.forEach(obj => {
      let newLi = document.createElement('li');
      newLi.textContent = `${obj.expenseName}: $${obj.expenseAmnt.toFixed(2)}`
      let delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.classList.add('del-btn');
      newLi.appendChild(delBtn);
      expenseList.appendChild(newLi);

      delBtn.addEventListener('click', () => {
        deleteExpense(obj.id);
      })
    });//fprEach Loop
  }

  function deleteExpense(id) {
    expenses = expenses.filter(obj => obj.id != id);
    saveToLocal();
    updateTotal();
    renderList();
  }
});//DOMContentLoaded