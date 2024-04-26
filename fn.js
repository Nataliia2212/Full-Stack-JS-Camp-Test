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
