const salaries1 = {
  Manager: { salary: 1000, tax: "10%" },
  Designer: { salary: 600, tax: "30%" },
  Artist: { salary: 1500, tax: "15%" },
};

const team1 = [
  { name: "Misha", specialization: "Manager" },
  { name: "Max", specialization: "Designer" },
  { name: "Vova", specialization: "Designer" },
  { name: "Leo", specialization: "Artist" },
];

function calculateTotalSalary({ salary, tax }) {
  const totalSalary = (salary * 100) / (100 - Number.parseInt(tax));
  return totalSalary;
}

function totalBudgetTeam(team, salaries) {
  const totalSalaryWithTax = team.reduce((total, member) => {
    const memberSalary = salaries[member.specialization];
    if (!memberSalary) {
      return total;
    }
    return total + calculateTotalSalary(memberSalary);
  }, 0);

  return totalSalaryWithTax;
}

function calculateTeamFinanceReport(salaries, team) {
  const financeReport = {};
  financeReport.totalBudgetTeam = totalBudgetTeam(team, salaries);

  team.forEach(({ specialization }) => {
    if (salaries[specialization]) {
      const budgetKey = "totalBudget" + specialization;
      financeReport[budgetKey] =
        (financeReport[budgetKey] || 0) +
        calculateTotalSalary(salaries[specialization]);
    }
  });

  Object.keys(financeReport).forEach((key) => {
    financeReport[key] = Math.trunc(financeReport[key]);
  });

  return financeReport;
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1);

console.log(JSON.stringify(financeReport1));

const salaries2 = {
  TeamLead: { salary: 1000, tax: "99%" },
  Architect: { salary: 9000, tax: "34%" },
};
const team2 = [
  { name: "Alexander", specialization: "TeamLead" },
  { name: "Gaudi", specialization: "Architect" },
  { name: "Koolhas", specialization: "Architect" },
  { name: "Foster", specialization: "Architect" },
  { name: "Napoleon", specialization: "General" },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));
