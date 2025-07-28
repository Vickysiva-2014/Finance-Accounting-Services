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

const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load saved theme on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.classList.add("dark");
    }
  });

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.classList.toggle("dark");

    // Save the preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });


  function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'signin.html';
  }

  
  document.querySelectorAll(".dash-nav-list a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionId = this.textContent.toLowerCase() + "Section";
    const sections = ["dashboard", "invoices", "transactions", "reports"];

    sections.forEach(id => {
      const sec = document.getElementById(id + "Section");
      if (sec) sec.style.display = "none";
    });

    if (sectionId === "dashboardSection") {
      document.querySelector(".dash-charts").style.display = "flex";
    } else {
      document.querySelector(".dash-charts").style.display = "none";
    }

    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = "block";
  });
});

 function showInvoices() {
      document.getElementById('dashboardSection').style.display = 'none';
      document.getElementById('invoiceSection').style.display = 'block';

      // Initialize Invoice Chart
      const ctx = document.getElementById('invoiceChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['INV001', 'INV002', 'INV003'],
          datasets: [{
            label: 'Invoice Amount',
            data: [50000, 30000, 70000],
            backgroundColor: ['green', 'orange', 'blue']
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }

    // Show Dashboard and Hide Invoices
   function showDashboard() {
      document.getElementById('dashboardSection').style.display = 'block';
      document.getElementById('invoiceSection').style.display = 'none';
      document.getElementById('transactionSection').style.display = 'none';
    }

    function showInvoices() {
      document.getElementById('dashboardSection').style.display = 'none';
      document.getElementById('invoiceSection').style.display = 'block';
      document.getElementById('transactionSection').style.display = 'none';
    }

    function showTransactions() {
      document.getElementById('dashboardSection').style.display = 'none';
      document.getElementById('invoiceSection').style.display = 'none';
      document.getElementById('transactionSection').style.display = 'block';
    }
     
    function showReports() {
  document.getElementById('dashboardSection').style.display = 'none';
  document.getElementById('invoiceSection').style.display = 'none';
  document.getElementById('transactionSection').style.display = 'none';
  document.getElementById('reportsSection').style.display = 'block';
}


    // Placeholder Functions
    function logout() { alert("Logged out!"); }
    function downloadReport() { alert("Downloading report..."); }

     const transactionCtx = document.getElementById("transactionChart").getContext("2d");
  new Chart(transactionCtx, {
    type: 'bar',
    data: {
      labels: ['2025-07-02', '2025-07-06', '2025-07-12'],
      datasets: [{
        label: 'Transaction Amount (₹)',
        data: [25000, 18000, 35000],
        backgroundColor: ['#4caf50', '#ff9800', '#4caf50']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

    const invoiceCtx = document.getElementById("invoiceChart").getContext("2d");

  new Chart(invoiceCtx, {
    type: "bar", // or "line", "pie" etc.
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
        label: "Invoices Generated",
        data: [5, 8, 4, 9, 7],
        backgroundColor: "#3e95cd",
        borderColor: "#2e59d9",
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Invoice Overview'
        }
      }
    }
  });

  // Report Chart (Pie)

  const reportCtx = document.getElementById("reportChart").getContext("2d");

  const reportChart = new Chart(reportCtx, {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3"],
      datasets: [
        {
          label: "Revenue",
          data: [40000, 60000, 50000],
          backgroundColor: "#4CAF50",
          borderRadius: 10
        },
        {
          label: "Expenses",
          data: [25000, 30000, 28000],
          backgroundColor: "#F44336",
          borderRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Quarterly Financial Report"
        }
      }
    }
  });


   function downloadReportToExcel() {
    const table = document.querySelector(".report-table");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Reports" });
    XLSX.writeFile(wb, "Report_Summary.xlsx");
  }

