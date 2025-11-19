const Moves = {
  punch: {
    name: "Punch",
    execute: (attacker, defender) => {
      defender.health -= 10;
    }
  },
  block: {
    name: "Block",
    execute: (attacker) => {
      attacker.block += 5;
    }
  },
  spearStrike: {
    name: "Spear Strike (Melee)",
    execute: (defender) => {
      defender.health -= 40;
    }
  }, 
  boltShot: {
    name: "Bolt Shot (Ranged)",
    execute: (defender) => {
      defender.health -= 25;
    }
  },
  defensiveStance: {
    name: "Defensive Stance (+10HP)",
    execute: (attacker) => {
      attacker.health += 50;
    }
  },
  powerThrust: {
    name: "Power Thrust (Melee)",
    execute: (defender) => {
      defender.health -= 30;
    }
  },
  axeStrike: {
    name: "Axe Strike (Melee)",
    execute: (defender) => {
      defender.health -= 45;
    }
  },
  shieldWall: {
    name: "Shield Wall (Health Buff)",
    execute: (attacker) => {
      attacker.health += 50;
    }
  },
  oathStrike: {
    name: "Oath Strike (70DMG,-20HP)",
    execute: (attacker, defender) => {
      attacker.health -= 20;
      defender.health -= 70;
    }
  },
  solarCleave: {
    name: "Solar Cleave (80DMG,-10HP)",
    execute: (attacker, defender) => {
      attacker.health -= 10;
      defender.health -= 80;
    }
  },
  axeSlash: {
    name: "Axe Slash (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  grenadeBurst: {
    name: "Grenade Burst (Ranged)",
    execute: (defender) => {
      defender.health -= 40;
    }
  },
  executionerBlow: {
    name: "Executioner Blow (75DMG,-15HP)",
    execute: (attacker, defender) => {
      defender.health -= 75;
      attacker.health -= 15;
    }
  },
  crushingAdvance: {
    name: "Crushig Advance (60DMG,+15HP)",
    execute: (attacker, defender) => {
      defender.health -= 60;
      attacker.health += 10;
    }
  },
  focusedShot: {
    name: "Focused Shot (Ranged)",
    execute: (defender) => {
      defender.health -= 55;
    }
  },
  wideBeam: {
    name: "Wide Beam (Ranged)",
    execute: (defender) => {
      defender.health -= 35;
    }
  },
  overchargedBeam: {
    name: "Overcharged Beam (75DMG,-15HP)",
    execute: (attacker, defender) => {
      defender.health -= 75;
      attacker.health -= 15;
    }
  },
  misSlash: {
    name: "Misericordia Slash (Melee)",
    execute: (defender) => {
      defender.health -= 40;
    }
  },
  powerSmash: {
    name: "Power Smash (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  blightGrenade: {
    name: "Blight Grenade (Ranged)",
    execute: (defender) => {
      defender.health -= 40;
    }
  },
  overStrike: {
    name: "Overwhelm Strike (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 60;
      attacker.health -= 15;
    }
  },
  crushAdvance: {
    name: "Crushing Advance (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 55;
      attacker.health += 10;
    }
  },
  lungeStrike: {
    name: "Lunge Strike (Melee)",
    execute: (defender) => {
      defender.health -= 45;
    }
  },
  riposte: {
    name: "Riposte (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 40;
      attacker.health += 10;
    }
  },
  crushingBlow: {
    name: "Crushing Blow (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 60;
      attacker.health -= 15;
    }
  },
  swiftAssault: {
    name: "Swift Assault (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  rendingClaw: {
    name: "Rending Claw (Melee)",
    execute: (defender) => {
      defender.health -= 45;
    }
  },
  warpJab: {
    name: "Warp Jab (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 40;
      attacker.health += 10;
    }
  },
  frenziedStrike: {
    name: "Frenzied Strike (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 55;
      attacker.health -= 10;
    }
  },
  assaultLunge: {
    name: "Assault Lunge (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  powerSlash: {
    name: "Power Slash (Melee)",
    execute: (defender) => {
      defender.health -= 45;
    }
  },
  boltShotC: {
    name: "Bolt Shot (Ranged)",
    execute: (defender) => {
      defender.health -= 30;
    }
  },
  overchargedStrike: {
    name: "Overcharged Strike (Melee)",
    execute: (attacker, defender) => {
      defender.health -= 55;
      attacker.health -= 10;
    }
  },
  rapidAssault: {
    name: "Rapid Assault (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  powerFistSmash: {
    name: "Power Fist Smash (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  heavyBolt: {
    name: "Heavy Bolter Volley (Ranged)",
    execute: (defender) => {
      defender.health -= 40;
    }
  },
  crushingSlam: {
    name: "Crushing Slam (Melee)",
    execute: (defender, attacker) => {
      defender.health -= 60;
      attacker.health -= 15;
    }
  },
  overAdvance: {
    name: "Overwhelm Advance (Melee)",
    execute: (defender, attacker) => {
      defender.health -= 55;
      attacker.health += 10;
    }
  },
  clawStrike: {
    name: "Claw Strike (Melee)",
    execute: (defender) => {
      defender.health -= 45;
    }
  },
  dualSlash: {
    name: "Dual Slash (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  ripAss: {
    name: "Ripping Assault (Melee)",
    execute: (defender, attacker) => {
      defender.health -= 55;
      attacker.health -= 10;

    }
  },
  chargeStrike: {
    name: "Charge Strike (Melee)",
    execute: (defender) => {
      defender.health -= 50;
    }
  },
  warpTalon: {
    name: "Warp Talon Strike (Melee)",
    execute: (defender) => {
      defender.health -= 60;
    }
  },
  warpBolt: {
    name: "Warp Bolt (Ranged)",
    execute: (defender) => {
      defender.health -= 55;
    }
  },
  crushMaw: {
    name: "Crushing Maw (Melee)",
    execute: (defender, attacker) => {
      defender.health -= 75;
      attacker.health -= 15;

    }
  },
  corruptingPulse: {
    name: "Corrupting Pulse (Attacks &Heal)",
    execute: (defender, attacker) => {
      defender.health -= 50;
      attacker.health += 20;

    }
  }
};


export default Moves;