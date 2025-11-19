class Player{
    moves = []
    constructor(name, health, maxhealth, weapon, moveset = []){
        this.name = name;
        this.health = health;
        this.maxhealth = maxhealth;
        this.weapon = weapon;
        this.block = 0
        moveset.forEach(element => {
            this.moves.push(element)
        });
    }
}

export default Player;