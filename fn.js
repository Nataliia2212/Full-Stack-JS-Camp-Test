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
  return Math.round(totalSalary);
}

function totalBudgetTeam(team, salaries) {
  return team.reduce((total, member) => {
    const memberSalary = salaries[member.specialization];
    return total + calculateTotalSalary(memberSalary);
  }, 0);
}

function nameOfSpecialization(specialization) {
  return "totalBudget" + specialization;
}

// console.log(nameOfSpecialization("Manager"));

// console.log(totalBudgetTeam(team1, salaries1));

function calculateTeamFinanceReport(salaries, team) {
  const financeReport = {};
  financeReport.totalBudgetTeam = totalBudgetTeam(team, salaries);
  const keys = Object.keys(salaries);
  const listOfSpecialization = keys.map((key) => {
    console.log(financeReport[nameOfSpecialization(key)]);
    if (financeReport[nameOfSpecialization(key)]) {
      financeReport[nameOfSpecialization(key)] =
        financeReport[nameOfSpecialization(key)] +
        calculateTotalSalary(salaries[key]);
    } else {
      financeReport[nameOfSpecialization(key)] = calculateTotalSalary(
        salaries[key]
      );
    }
  });
  return financeReport;
}

const financeReport1 = calculateTeamFinanceReport(salaries1, team1);

console.log(financeReport1);
console.log(JSON.stringify(financeReport1));
