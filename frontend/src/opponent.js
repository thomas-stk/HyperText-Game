class Opponent{
    moveSeq = []
    constructor(name, health, maxhealth, moveseq = []){
        this.name = name;
        this.health = health;
        this.maxhealth = maxhealth;
        this.block = 0;
        moveseq.forEach(element => {
            this.moveSeq.push(element)
        });
    }
}

export default Opponent;