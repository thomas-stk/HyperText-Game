class Custodian{

    #name = null;
    #health = 100;
    #curHealth = 0;
    #armour = 0;
    #weapon = null;


    constructor(name, health, armour, weapon){
        this.#name = name;
        this.#curHealth = health;
        this.#health = health;
        this.#armour = armour;
        this.#weapon = weapon;
    }

    getHealth(){
        return (`${this.#curHealth}/${this.#health}`, this.#curHealth);
    }

    setWeaponName(weapon){
        if (typeof(weapon) == "string"){
            this.#name = name
        }
        throw new Error("Invalid Data Type");

    }

    setHealthUp(num){
        this.#curHealth += num 
    }

    speak(){
        return `${this.#name} ${this.#curHealth} ${this.#health} ${this.#armour} ${this.#weapon.getWeaponName()} ${this.#weapon.getWeaponDamage()} ${this.#weapon.getWeaponRange()}`
    }
}

class Warden{

    #name = null;
    #health = 0;
     #curHealth = 0;
    #armour = 0;
    #weapon = null;

    constructor(name, health, armour, weapon){
        this.#name = name;
        this.#health = health + 10;
        this.#curHealth = health;
        this.#armour = armour - 10;
        this.#weapon = weapon;
    }

    raise_banner(){
        this.#health += 100;
    }

    speak(){
        return `${this.#name} ${this.#curHealth} ${this.#health} ${this.#armour} ${this.#weapon.getWeaponName()} ${this.#weapon.getWeaponDamage()} ${this.#weapon.getWeaponRange()}` 
    }
}

class Enemies{

    #name = null;
    #health = 0;
    #armour = 0;
    #weapon = null;



    constructor(name, health, armour, weapon){
        this.#name = name;
        this.#health = health;
        this.#armour = armour;
        this.#weapon = weapon;
    }

    speak(){
        return `${this.#name} ${this.#health} ${this.#armour} ${this.#weapon.getWeaponName()} ${this.#weapon.getWeaponDamage()} ${this.#weapon.getWeaponRange()}`
    }
}

class weapon{

    #name = null;
    #damage = 0;
    #range = 0;


    constructor(name, damage, range){
        this.#name = name;
        this.#damage = damage;
        this.#range = range;

    }

    getWeaponName(){
        return this.#name;
    }

    // setWeaponName(name){
    //     if (typeof(name) == "string"){
    //         this.#name = name
    //     }
    //     throw new Error("Invalid Data Type");

    // }

    getWeaponDamage(){
        return this.#damage;
    }

    getWeaponRange(){
        return this.#range;
    }
}

const weapon_1 = new weapon("Guardian Spear", 25, 60)
const weapon_2 = new weapon("Castellan Axe", 35, 45)
const eweapon_1 = new weapon("Hell-forge axe", 45, 45)

const custodian_1 = new Custodian("Owen", 100, 200, weapon_1)
const custodian_2 = new Custodian("Luke", 100, 100, weapon_2)
const enemy_1 = new Enemies("Daemon Prince", 300, 150, eweapon_1)

const warden1 = new Warden("Thomas", 100, 35, weapon_1)


// warden1.raise_banner()
// console.log(warden1.speak())

const guards = [custodian_1, custodian_2, warden1]

guards.forEach(element => {
    console.log(element.speak())
});

// console.log(custodian_1.speak())
// console.log(custodian_2.speak())
// console.log(enemy_1.speak())


//     speak(){
//         return `${this.name} ${this.damage} ${this.range}`
//     }
        
// }
 

// console.log(weapon_1.speak())
// console.log(weapon_2.speak())