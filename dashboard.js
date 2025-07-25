// Chart 1: Income vs Expense Doughnut
const incomeExpenseChart = new Chart(document.getElementById("incomeExpenseChart"), {
  type: "doughnut",
  data: {
    labels: ["Income", "Expenses"],
    datasets: [{
      data: [580000, 320000],
      backgroundColor: ["#28a745", "#dc3545"]
    }]
  }
});

// Chart 2: Monthly Revenue
const revenueChart = new Chart(document.getElementById("revenueChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Revenue",
      data: [60000, 80000, 75000, 90000, 85000, 95000, 100000],
      backgroundColor: "#007bff"
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Download Report (Excel)
function downloadReport() {
  const wb = XLSX.utils.book_new();

  const invoiceData = [
    ["Invoice#", "Client", "Amount", "Status"],
    ["INV001", "ABC Pvt Ltd", "₹50,000", "Paid"],
    ["INV002", "XYZ Inc", "₹75,000", "Unpaid"],
    ["INV003", "MNO Ltd", "₹30,000", "Pending"]
  ];
  const invoiceSheet = XLSX.utils.aoa_to_sheet(invoiceData);
  XLSX.utils.book_append_sheet(wb, invoiceSheet, "Invoices");

  const txnData = [
    ["Date", "Details", "Amount", "Type"],
    ["2025-07-20", "Consulting", "₹40,000", "Credit"],
    ["2025-07-18", "Software Purchase", "₹20,000", "Debit"],
    ["2025-07-17", "Office Rent", "₹60,000", "Debit"]
  ];
  const txnSheet = XLSX.utils.aoa_to_sheet(txnData);
  XLSX.utils.book_append_sheet(wb, txnSheet, "Transactions");

  XLSX.writeFile(wb, "Financial_Report.xlsx");
}


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('darkModeToggle');

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});