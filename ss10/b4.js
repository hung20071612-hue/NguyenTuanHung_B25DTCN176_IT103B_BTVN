const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];

function analyzeSalary(minYears, teamPlayers){
    let salaryFiltered = teamPlayers.filter((player , index) => player.years >= minYears);
    if(salaryFiltered.length === 0){
        return {
            totalSalary : 0,
            highestPaid : null,
            lowestPaid : null,
        };
    };
    let totalSalary = salaryFiltered.reduce((total , sum) => total + sum.salary , 0);
    let highestPaid = salaryFiltered.reduce((max, player) => player.salary > max.salary ? player : max);
    let lowestPaid = salaryFiltered.reduce((min, player) => player.salary < min.salary ? player : min);
    return {
        totalSalary,
        highestPaid,
        lowestPaid,
    };
}

console.log(analyzeSalary(10, players));
console.log(analyzeSalary(30, players));