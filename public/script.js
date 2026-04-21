// LOAD
async function loadEmployees() {
  let res = await fetch("/employee");
  let data = await res.json();

  empList.innerHTML = "";

  data.forEach((e, i) => {
    empList.innerHTML += `
      <li>
        ${e.name} - ${e.role}
        <button onclick="deleteEmployee(${i})">Delete</button>
      </li>
    `;
  });
}

async function loadProducts() {
  let res = await fetch("/product");
  let data = await res.json();

  prodList.innerHTML = "";

  data.forEach((p, i) => {
    prodList.innerHTML += `
      <li>
        ${p.name} - ${p.price}
        <button onclick="deleteProduct(${i})">Delete</button>
      </li>
    `;
  });
}

// ADD
async function addEmployee() {
  await fetch("/employee", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: empName.value,
      role: empRole.value
    })
  });
  loadEmployees();
}

async function addProduct() {
  await fetch("/product", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: prodName.value,
      price: prodPrice.value
    })
  });
  loadProducts();
}

// DELETE
async function deleteEmployee(id) {
  await fetch(`/employee/${id}`, { method: "DELETE" });
  loadEmployees();
}

async function deleteProduct(id) {
  await fetch(`/product/${id}`, { method: "DELETE" });
  loadProducts();
}

// INIT
loadEmployees();
loadProducts();