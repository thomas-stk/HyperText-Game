import Moves from "./moves";
import Opponent from "./opponent";
import Player from "./Player";


const storyData = {
    "p1": {
        "Story":"You, a lone Custodian have boarded a Hulk Space that is drifting dangerously close to Terra, you have been tasked to destroy the hulk space and gather any relics/data you could find...",
        "Options": [["Continue","p2"]],
        isFight : false

    },

    "p2": {
        "Story":"SELECT YOUR CLASS\n",
        
        "Options":[
            ["Custodian Guard","p3", "The backbone of the Custodes — adaptable, balanced, and unyielding, Weapon: Guardian Spear", new Player("Custodian Guard", 350, 350, "Guardian Spear", [Moves.spearStrike, Moves.boltShot, Moves.defensiveStance, Moves.powerThrust])],
            ["Custodian Warden","p3w", "Grim oath-sworn guardians, tankier and more brutal than Guards, Weapon: Castellan Axe", new Player("Custodian Warden", 400, 400, "Castellan Axe", [Moves.axeStrike, Moves.shieldWall, Moves.oathStrike, Moves.solarCleave])],
            ["Allarus Custodian","p3", "Elite Terminator-armored Custodians, designed for assassination and breaking enemy leaders, Weapon: Castellan Axe", new Player("Allarus Custodian", 370, 370, "Castellan Axe", [Moves.axeSlash, Moves.grenadeBurst, Moves.executionerBlow, Moves.crushingAdvance])],
            ["Sagittarum Custodian","p3", "Fire support specialists, holding long corridors or clearing rooms with precision ranged fire, designed for assassination and breaking enemy leaders, Weapon: Adrathic Destructor", new Player("Sagittarum Custodian", 340, 340, "Adrathic Destructor", [Moves.focusedShot, Moves.wideBeam, Moves.overchargedBeam, Moves.misSlash])]

        ],
        isFight : false
    },
    "p3": {
        "Story":"Advance to the reactor sanctum. End the hulk. There are 3 paths.", 
        "Options":[
            ["Left", "p4"],
            ["Straight Ahead", "p6"],
            ["Right", "p5"]
        ],
        isFight : false
    },
    "p3w": {
        "Story":"Advance to the reactor sanctum. End the hulk. There are 3 paths.", 
        "Options":[
            ["Left", "p4w"],
            ["Straight Ahead", "p6w"],
            ["Right", "p5w"]
        ],
        isFight : false
    },
    "p4": {
        "Story":"The corridor lies silent, yet not abandoned. Burned-out torches line the walls, and at their base, the floor bears the marks of recent passage — armored boots, too large for any mortal man. Another Custodian walks these halls. You are not the first to tread this path.\n The silence deepens as you press on toward the sanctum.",
        "Options": [["Continue","p10"]],
        isFight : false
    },
    "p4w": {
        "Story":"The corridor is deserted, but the stillness feels familiar — the silence of duty long endured. You pass a shrine half-buried in debris; the aquila still flickers. Once, a Warden like you would have knelt here. Now you are the one who must see the vigil through.\n You advance, oath heavy upon your shoulders.",
        "Options": [["Continue","p10w"]],
        isFight : false
    },
    "p5": {
        "Story":"You encounter chaos elites...The Voidreaper Triarch\n Champion Varok the Unyielding (chaos terminator champion, Duelist), Malreth the Blightforged (chaos terminator, heavy support) and Kaelos the Warpclaw (chaos terminator, shock assault)",
        "Options":[["Eliminate them", "f1"]],
        isFight : false
    },
    "p5w": {
        "Story":"You encounter chaos elites...The Voidreaper Triarch\n Champion Varok the Unyielding (chaos terminator champion, Duelist), Malreth the Blightforged (chaos terminator, heavy support) and Kaelos the Warpclaw (chaos terminator, shock assault)",
        "Options":[["Eliminate them", "f1w"]],
        isFight : false
    },
    "f1": {
        "Text": "The Voidreaper Triarch..Malreth the Blightforged",
        "Options":[["Continue", "f1.2"]],
        isFight : true,
        opponent: [new Opponent("Malreth the Blightforged", 220, 220, [Moves.powerSmash, Moves.blightGrenade, Moves.overStrike, Moves.crushAdvance])]
    },
    "f1.2": {
        "Text": "The Voidreaper Triarch..Kaelos the Warpclaw",
        "Options":[["Continue", "f1.3"]],
        isFight : true,
        opponent: [new Opponent("Kaelos the Warpclaw", 180, 180, [Moves.lungeStrike, Moves.riposte, Moves.crushingBlow, Moves.swiftAssault])]
    },
    "f1.3": {
        "Text": "The Voidreaper Triarch..Champion Varok the Unyielding",
        "Options":[["Continue", "p10"]],
        isFight : true,
        opponent: [new Opponent("Champion Varok the Unyielding", 200, 200, [Moves.rendingClaw, Moves.warpJab, Moves.frenziedStrike, Moves.assaultLunge])]
    },
    "f1w": {
        "Text": "The Voidreaper Triarch..Malreth the Blightforged",
        "Options":[["Continue", "f1.2w"]],
        isFight : true,
        opponent: [new Opponent("Malreth the Blightforged", 220, 220, [Moves.powerSmash, Moves.blightGrenade, Moves.overStrike, Moves.crushAdvance])]
    },
    "f1.2w": {
        "Text": "The Voidreaper Triarch..Kaelos the Warpclaw",
        "Options":[["Continue", "f1.3w"]],
        isFight : true,
       opponent: [new Opponent("Kaelos the Warpclaw", 180, 180, [Moves.lungeStrike, Moves.riposte, Moves.crushingBlow, Moves.swiftAssault])]
    },
    "f1.3w": {
        "Text": "The Voidreaper Triarch..Champion Varok the Unyielding",
        "Options":[["Continue", "p10w"]],
        isFight : true,
        opponent: [new Opponent("Champion Varok the Unyielding", 200, 200, [Moves.rendingClaw, Moves.warpJab, Moves.frenziedStrike, Moves.assaultLunge])]
    },
    "p6": {
        "Story":"You encounter The Three Warp-Spawned Stalkers..\n A warband of Possessed Chaos Marines, twisted by daemonic pacts. On a Space Hulk soaked in the Immaterium, they are at their most dangerous — part Astartes, part predator, part daemon.",
        "Options": [["Continue","p7"]],
        isFight : false
    },
    "p6w": {
        "Story":"You encounter The Three Warp-Spawned Stalkers..\n A warband of Possessed Chaos Marines, twisted by daemonic pacts. On a Space Hulk soaked in the Immaterium, they are at their most dangerous — part Astartes, part predator, part daemon.",
        "Options": [["Continue","p7w"]],
        isFight : false
    },    
    "p7": {
        "Story":"Xylen the Maw-Taken (Chaos Terminator Marine, Duelist), Ghorax the Horned (Chaos Terminator Marine, Heavy Support) and Seryth the Many-Limbed (Chaos Terminator Marine, Shock Assault)",
        "Options": [["Eliminate them","f2"]],
        isFight : false
    },     
    "p7w": {
        "Story":"Xylen the Maw-Taken (Chaos Terminator Marine, Duelist), Ghorax the Horned (Chaos Terminator Marine, Heavy Support) and Seryth the Many-Limbed (Chaos Terminator Marine, Shock Assault)",
        "Options": [["Eliminate them","f2w"]],
        isFight : false
    }, 
    "f2": {
        "Text": "The Warp-Spawned Stalkers..Xylen the Maw-Taken",
        "Options": [["Continue","f2.1"]],
        isFight : true,
        opponent: [new Opponent("Xylen the Maw-Taken", 180, 180, [Moves.powerSlash, Moves.boltShotC, Moves.overchargedStrike, Moves.rapidAssault])]
    },
    "f2.1": {
        "Text": "The Warp-Spawned Stalkers..Ghorax the Horned",
        "Options": [["Continue","f2.2"]],
        isFight : true,
        opponent: [new Opponent("Ghorax the Horned", 200, 200, [Moves.powerFistSmash, Moves.heavyBolt, Moves.crushingSlam, Moves.overAdvance])]
    },
    "f2.2": {
        "Text": "The Warp-Spawned Stalkers..Seryth the Many-Limbed",
        "Options": [["Continue","p10"]],
        isFight : true,
        opponent: [new Opponent("Seryth the Many-Limbed", 170, 170, [Moves.clawStrike, Moves.dualSlash, Moves.ripAss, Moves.chargeStrike])]
    },
    "f2w": {
        "Text": "The Warp-Spawned Stalkers..Xylen the Maw-Taken",
        "Options": [["Continue","f2.1w"]],
        isFight : true,
        opponent: [new Opponent("Xylen the Maw-Taken", 180, 180, [Moves.powerSlash, Moves.boltShotC, Moves.overchargedStrike, Moves.rapidAssault])]
    },        
    "f2.1w": {
        "Text": "The Warp-Spawned Stalkers..Ghorax the Horned",
        "Options": [["Continue","f2.2w"]],
        isFight : true,
        opponent: [new Opponent("Ghorax the Horned", 200, 200, [Moves.powerFistSmash, Moves.heavyBolt, Moves.crushingSlam, Moves.overAdvance])]
    },
    "f2.2w": {
        "Text": "The Warp-Spawned Stalkers..Seryth the Many-Limbed",
        "Options": [["Continue","p10w"]],
        isFight : true,
        opponent: [new Opponent("Seryth the Many-Limbed", 170, 170, [Moves.clawStrike, Moves.dualSlash, Moves.ripAss, Moves.chargeStrike])]
    },
    "p10": {
        "Story":"You carry on after victory...The sanctum quakes. From the warp tears strides a Daemon Prince — vast, winged, its claws dripping ruin. Few in the galaxy could stand. You are no few.",
        "Options": [["Eliminate The Daemon Prince","f3"]],
        isFight : false
    },   
    "p10w": {
        "Story":"You carry on after victory...The sanctum quakes. From the warp tears strides a Daemon Prince — vast, winged, its claws dripping ruin. Few in the galaxy could stand. You are no few.",
        "Options": [["Eliminate The Daemon Prince","f3w"]],
        isFight : false
    },
    "f3": {
        "Story":"Final Boss: Daemon Prince",
        "Options":[["Continue", "p11"]],
        isFight : true,
        opponent: [new Opponent("Daemon Prince", 300, 300, [Moves.warpTalon, Moves.warpBolt, Moves.crushMaw, Moves.corruptingPulse])]
    },
    "f3w": {
        "Story":"Final Boss: Daemon Prince",
        "Options":[["Continue", "p11w"]],
        isFight : true,
        opponent: [new Opponent("Daemon Prince", 300, 300, [Moves.warpTalon, Moves.warpBolt, Moves.crushMaw, Moves.corruptingPulse])]
    },
    "p11": {
        "Story":"You have defeated the Daemon Prince. March on to the sanctum.",
        "Options":[["Continue","p12"]],
        isFight : false
    },
    "p11w": {
        "Story":"You have defeated the Daemon Prince. March on to the sanctum.",
        "Options":[["Continue","p12w"]],
        isFight : false
    },
    "p12": {
        "Story":"The sanctum is not empty. A lone Custodian Warden stands vigil at the console, his auramite dulled by centuries. He inclines his head, solemn.\n Warden: “The reactor`s heart can be silenced, but one must remain to hold the seal. I was posted here when this vessel first trespassed the Throneworld`s domain. My oath binds me until its end.”\n He turns back to the console. “Go. Carry word to Terra that the vigil is complete.”",
        "Options":[["Obey the Warden and you carry word to Tera.", "e1"], [" Insist on staying..You sacrifice yourself, the Warden carries the data to Terra.", "e1"]],
        isFight : false
    },
    "p12w": {
        "Story":"The corridor trembles as you reach the reactor sanctum. Alone. The hulk’s heart beats with corruption — a blasphemous pulse that must be silenced.\n No other Custodian remains. No retreat, no recall.",
        "Options":[["Continue","p13w"]],
        isFight : false
    },
    "p13w": {
        "Story":"You place your gauntlet on the console, the reactor`s glow reflecting across your auramite plate.\n “The oath binds me. This vessel will die, and with it, its stain upon the Emperor`s realm.”",
        "Options":[["Continue","p14w"]],
        isFight : false
    },
    "p14w": {
        "Story":"A low hum builds into a roar as you trigger the purge sequence. Flames rise, metal screams, the light swells — and you stand firm until the end.\n The Space Hulk burns. The Sol System endures. The Warden`s vigil is fulfilled.",
        "Options":[["Continue","e1"]],
        isFight : false
    },
    "e1": {
        "Story":"The End.",
        "Options":[["Play Again","p1"]],
        isFight : false
    },
    "d1": {
        "Story": "You Died",
        "Options":[["Restart","p1"]],
        isFight : false
    }
       




}       

export default storyData;