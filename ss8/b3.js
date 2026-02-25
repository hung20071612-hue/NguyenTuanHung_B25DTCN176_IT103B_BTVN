const players = [`Messi - Forward`,`Ronaldo - Forward`,`Neymar - Forward`,`De Bruyne - Midfielder`,`Kante - Midfielder`,`Van Dijk - Defender`,`Alisson - Goalkeeper`];
let position = prompt(`Vị trí của cầu thủ: `);
const filterPlayersByPosition = players.filter((value) => {
    return  value.includes(position) == true;
    
})
console.log (filterPlayersByPosition);