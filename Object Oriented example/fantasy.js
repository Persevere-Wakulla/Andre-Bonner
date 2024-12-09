// display
const mainDisplay = document.getElementById('display')
const text = document.querySelector("#text");
const nameInput = document.getElementById('name')
// controls
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
// player
const character = document.getElementById('character')

// monster
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

let inventory = ["stick"]
let gold = 50
let battleCount = 0


// creation
const user = new Player(nameInput.value, 20, 1, 4, 2, 2, 2, 2, 0)
const bigSkel = new Monster('Skeleton King', 3, 30, 7, 4, 8, 2, 3, 10)
const manticore = new Monster('Manticore', 4, 30, 5, 2, 4, 3, 4, 12)
const cyclops = new Monster('Cyclops', 5, 50, 10, 5, 8, 2, 1, 18)
const dragon = new Monster('Dragon', 10, 200, 12, 8, 10, 8, 5, 20)


const town1 = new Place("Town Square", 0, ["Go to Store", "Go to Temple", "Go to Tavern"], [store1.update, temple1.update, tavern1.update], "You are in the town square. You see a sign that says \"Store\", one that reads \"Tavern\" and a large Temple.")
const store1 = new Conversation("Store", 0, ["Buy 10 health (10 gold)", "Buy Dagger (20 gold)", "Go to town square"], [], "You enter the store.")
const tavern1 = new Place("Tavern", 0, ["Order drink", "Speak to Barmaiden", "Go to Town"], [], "You enter the tavern. The place is full and smells of ale and roasted meat.")
const barmaiden1 = new Conversation("Talk with Barmaiden", 0, ["Order food", "Order drink", "Go to Town"], [], "What can I do for you? I don't have time to chat, it's busy.")
const temple1 = new Place("Temple", 0, ["Pray for Healing", "Speak to Priest", "Go To Town"], [], "You enter the Temple. The room is filled with a brilliant light.")
const priest = new Conversation("Talk to Priest", 0, ["Go to Graveyard", "Pray for Healing", "Go to Town"], ["", "", ""], "The graveyard has been overrun by evil spirits. Could you please help us?")

const graveyard1 = new Place("Graveyard", 0, ["Look around", "Continue", "Rest"], [graveyard1.look, graveyard1.update, user.rest], "You enter the graveyard. The ground is damp and the fog makes it difficult to see")
const graveyard2 = new Place("Graveyard", 1, ["Look around", "Continue", "Rest"], [graveyard2.look, graveyard2.update, user.rest], "You continue through the graveyard, you can see a large pedestal in the center.")
const graveyard3 = new Place("Graveyard", 2, ["Look closer", "Grab the Hammer", "Leave"], [], "There's a strong looking Hammer on the pedestal. What do you do?")
const skelKingBattle = new Fight("Skeleton King", [], [], "MUHAHAHA! Welcome to your doom, flesh bag!")

// ! return to town
const store2 = new Conversation("Store", 1, ["Buy 15 health (20 gold)", "Buy Leather armor (30 gold)", "Go to town square"], [], "You enter the store.")
const tavern2 = new Place("Tavern", 1, ["Order drink", "Speak to Barmaiden", "Go to Town"], [], "You enter the tavern. It is empty, with the exception of the lonely barmaiden.")
const barmaiden2 = new Conversation("Talk with Barmaiden", 1, ["Go to Woods", "Order drink", "Go to Town"], [], "The Merchant is very late and there have been rumors of bandits in the Woods. Do you think something could have happend to him?")
const temple2 = new Place("Temple", 1, ["Pray for Healing", "Go to Town", "Go to Town"], [], "The Temple is filled with a brilliant light.")

const woods1 = new Place("Woods", 0, ["Look around", "Continue", "Rest"], [woods1.look, woods1.update, user.rest], "You enter the woods. The sun is blocked out by the canopy, making it seem almost like night.")
const woods2 = new Place("Woods", 1, ["Look around", "Continue", "Rest"], [woods2.look, woods2.update, user.rest], "As you walk through the forest, you hear strange growling coming from up ahead.")
const woods3 = new Place("Woods", 2, ["Look closer", "Read the Symbols", "Leave"], [], "You approach a large peculiar tree with familiar looking symbols carved into the side.")
const manticoreBattle = new Fight("Manticore", [], [], "\"GGRRRRROOOOAAAARRR!!!\" screams a beast as it lands mere feet from where you were standing.")
const merchant = new Conversation("Merchant", ["Buy 20 health (25 gold)", "Buy Iron armor (45)", "Go to Town"], "Thank you so much for saving me! You get a special deal, my friend!")

// ! return to town
const tavern3 = new Place("Tavern", 2, ["Speak with stranger", "Speak to Barmaiden", "Go to Town"], [], "You enter the tavern. There's a strange old man in the corner raving about a cave.")
const barmaiden3 = new Conversation("Talk with Barmaiden", 2, ["Order food", "Order drink", "Go to Town"], [], "Thank you so much for rescuing the Merchant, you're a true hero!")
const store3 = new Conversation("Store", 2, ["Buy 20 health (30 gold)", "Buy ShortSword (50 gold)", "Go to town square"], [], "You enter the store.")
const stranger = new Conversation("Strange traveller", ["Order drinks", "Go to Cave", "Go to Town"], [], "Th-that cave...full of m-m-monsters! Big-great big eye!")

const cave1 = new Place("Cave", 0, ["Look around", "Continue", "Rest"], [cave1.look, cave1.update, user.rest], "You enter the cave. It's very dark, but luckily you remembered to bring a torch.")
const cave2 = new Place("Cave", 1, ["Look around", "Continue", "Rest"], [cave2.look, cave2.update, user.rest], "The air smells dank, like mildew. You hear crunching sounds as you walk.")
const cave3 = new Place("Cave", 2, ["Look closer", "Enter", "Leave"], [], "There appears to be a large doorway ahead of you. Do you move on?")
const cyclopsBattle = new Fight("Cyclops", [], [], "Oh, yum! I love the taste of human!")

// ! return to town
const town2 = new Place("Damaged Town", 1, ["Speak to Herald", "Go to Tavern", "Go to Temple"], [], "The town is nearly destroyed. The Store is burned to the ground, and the Tavern is collapsed. The King's Herald is calling to all adventurers outside the Temple that still stands.")
const herald = new Conversation("King's Herald", 0, ["Go to Town", "Go to Lair", "Go to Temple"], [], "The dragon has come and razed the town and kidnapped the princess! Please all adventurers, the King begs of thee, slay the dragon and return his beloved daughter!")
const lair1 = new Place("Lair", 0, ["Look around", "Continue", "Rest"], [lair1.look, lair1.update, user.rest], "The Dragon's Lair. The walls are covered in fire, yet they do not burn.")
const lair2 = new Place("Lair", 1, ["Look around", "Continue", "Rest"], [lair2.look, lair2.update, user.rest], "The temperature steadily rises as you traverse deeper into the lair.")
const lair3 = new Place("Lair", 2, ["Look closer", "Enter", "Rest"], [], "You have reached the Inner Sanctum of the Dragon's Lair. There's no backing out now!")
const dragonBattle = new Fight("Dragon", [], [], "You shall join all the other pathetic humans who have come before you!")


const assets = {
    monsters: {
        graveyard: [makeGoblin, makeSkelly, bigSkel],
        woods: [makeOrc, makeTroll, manticore],
        cave: [makeImp, makeDarkElf, cyclops],
        lair: [bigSkel, manticore, cyclops, dragon]
    },
    locations: {
        town: {
            square: [town1, town2],
            tavern: [tavern1, tavern2, tavern3],
            temple: [temple1, temple2],
            store: [store1, store2, store3]
        },
        graveyard: [graveyard1, graveyard2, graveyard3],
        woods: [woods1, woods2, woods3],
        cave: [cave1, cave2, cave3],
        lair: [lair1, lair2, lair3]
    },
    conversations: {
        tavern: [barmaiden1, barmaiden2, barmaiden3, stranger],
        temple: [priest, herald],
        woods: [merchant]
    },
    weapons: [
        {
            name: 'stick',
            power: 2,
            worth: 5
        },
        {
            name: 'hammer',
            power: 8,
            worth: 10
        },
        {
            name: 'short sword',
            power: 15,
            worth: 20
        },
        {
            name: 'axe',
            power: 25,
            worth: 50
        },
        {
            name: 'long sword',
            power: 35,
            worth: 80
        }
    ],
    armor: [
        {
            type: 'clothes',
            toughness: 1,
            worth: 5
        },
        {
            type: 'padded',
            toughness: 3,
            worth: 10
        },
        {
            type: 'leather',
            toughness: 8,
            worth: 22
        },
        {
            type: 'chain mail',
            toughness: 12,
            worth: 30
        },
        {
            type: 'scale mail',
            toughness: 18,
            worth: 55
        },
        {
            type: 'plate',
            toughness: 25,
            worth: 100
        }
    ],

}


class Player {
    constructor(name, lvl, maxHp, weapon, armor, att, def, spd, xp) {
        this.name = name
        this.level = lvl
        this.maxHp = maxHp
        this.health = maxHp
        this.weapon = weapon
        this.armor = armor
        this.spd = spd
        this.att = att
        this.def = def
        this.xp = xp
    }

    gainXP(monster) {
        this.xp += monster.xp
        if (this.xp >= 20) {
            this.levelUp(this.level)
        }
    }

    levelUp(lvl) {
        mainDisplay.innerText = "Level Up! \n HP+ \n Spd+ \n Att+ \n Def+"
        this.maxHp += 5
        this.spd++
        this.att++
        this.def++
        this.xp = 0
        this.level++
        if (lvl === 3) {
            this.def += 2
        }
        if (lvl === 5) {
            this.att += 2
        }
        if (lvl === 8) {
            this.maxHp + 5
        }
        this.health = this.maxHp
        this.update()
    }

    rest() {
        if ((this.health + this.armor + this.def) < this.maxHp) {
            this.health += (this.armor + this.def) * 2
        } else {
            this.health = this.maxHp
        }
        this.update()
    }

    update() {
        healthElem.textContent = this.health
        levelElem.textContent = this.level
        xpElem.textContent = this.xp
    }
}

class Weapon {
    constructor(name, power, worth) {
        this.name = name
        this.power = power
        this.worth = worth
    }
}

class Place {
    constructor(name, timeline, button, func, text, img) {
        this.name = name
        this.timeline = timeline
        this.button = button
        this.func = func
        this.text = text
        this.img = img
    }

    // ?will it work like this
    update() {
        mainDisplay.style.backgroundImage = `url(${this.img})`
        button1.textContent = this.button[0]
        button1.onclick = this.func[0]
        button2.textContent = this.button[1]
        if (battleCount === 7) {
            const bossBattle = new Fight(assets.monsters[`${this.name.toLowercase()}`][2])
            button2.onclick = bossBattle.update()
        } else if (Math.floor(Math.random() * 5) > 1) {
            const battle = battleCount < 4 ? new Fight(assets.monsters[`${this.name.toLowercase()}`][0]) : new Fight(assets.monsters[`${this.name.toLowercase()}`][1])
            button2.onclick = battle.update()
        } else {
            button2.onclick = this.func[1]
        }
        button3.textContent = this.button[2]
        button3.onclick = this.func[2]
        text.textContent = this.text
    }
    look() {
        switch (this.name) {
            case 'graveyard':
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
                break;
            case 'woods':
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
                break;
            case 'cave':
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
                break;
            default:
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
        }
    }
    action() {
        switch (this.name) {
            case 'graveyard':
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
                break;
            case 'woods':
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
                break;
            case 'cave':
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
                break;
            default:
                switch (this.timeline) {
                    case 1:
                        text.textContent = ''
                        break;
                    case 2:
                        text.textContent = ''
                        break;
                    default:
                        text.textContent = ''
                }
        }
    }
}


class Monster {
    constructor(name, lvl, hp, att, def, spd, xp, drops) {
        this.name = name
        this.level = lvl
        this.hp = hp
        this.spd = spd
        this.att = att
        this.def = def
        this.xp = xp
        this.drops = drops
    }
}

//? done
class Conversation extends Location {
    super()
    constructor(person) {
        this.person = person
    }
    begin() {
        charPic.style.display = "inline-block"
        charPic.src = this.person
        this.update()
    }
}

//? done
class Fight {
    constructor(monster, location) {
        this.monster = monster
        this.location = location
    }
    start() {
        charPic.style.display = "inline-block"
        monsterStats.style.display = 'inline-block'
        charPic.src = monster.img
        monsterName.textContent = monster.name
        monsterHealthText.textContent = monster.health
        text.textContent = `You are attacked by a ${monster.name}`
    }
    fight() {
        let monRNG = Math.floor(Math.random() * this.monster.spd) + 1
        if (monRNG === 1) {
            this.monster.health += this.monster.armor + this.monster.def
            text.textContent = `${this.monster.name} defends. No damage.`

        } else {
            this.monster.health -= (user.weapon + user.att) - (this.monster.def + this.monster.armor)
            user.health -= (this.monster.att + this.monster.weapon) - (user.def + user.armor)
            if (this.monster.health <= 0) {
                text.textContent = `Congratulations! You defeated the ${this.monster.name}!`
                this.win()
            }
            if (user.health <= 0) {
                // !youLose()
            }
        } this.update()
    }
    defend() {
        user.health += user.armor + user.def
        text.textContent = `You defend and heal for ${user.armor + user.def}HP`
        this.update()
    }
    run() {
        if (Math.floor(Math.random() * user.spd) + 1 > 3) {
            text.textContent = 'You get away safely.'
        } else {
            text.textContent = 'No escape!'
        } this.update()
    }
    update() {
        monsterHealthText = this.monster.health
        healthElem.textContent = user.health
    }
    lose() {
        text.textContent = 'Game Over!'
        // !playAgain()
    }
    win() {
        if (assets.monsters.lair.includes(this.monster)) {
            if (this.monster.name === 'dragon') {
                // !youWin()
            } else {
                cleared.update()
            }
        } else {
            if (battleCount > 7) {
                assets.locations[`${this.location.name}`][2]
            } else if (battleCount > 4) {
                assets.locations[`${this.location.name}`][1]
            } else {
                assets.locations[`${this.location.name}`][0]
            }
            battleCount++
        }
        user.gainXP(this.monster)
    }
}


// creating random monsters
function makeGoblin() {
    const dropRate = Math.floor(Math.random() * 5) + 1
    const level = Math.floor(Math.random() * 2) + 1
    let hp, att, def, spd, xp, drops
    if (level === 2) {
        hp = 10
        att = 3
        def = 3
        spd = 2
        xp = 8
    } else {
        hp = 5
        att = 1
        def = 1
        spd = 1
        xp = 6
    }
    if (dropRate === 5) {
        drops = { name: 'potion', effect: user.health + 10 }
    } else {
        drops = null
    }
    let goblin = new Monster('goblin', level,
        Math.floor(Math.random() * 5) + hp,
        Math.floor(Math.random() * 3) + att,
        Math.floor(Math.random() * 3) + def,
        Math.floor(Math.random() * 5) + spd,
        xp, drops
    )
    return goblin
}


function makeSkelly() {
    const dropRate = Math.floor(Math.random() * 5) + 1
    const level = Math.floor(Math.random() * 3) + 1
    let hp, att, def, spd, xp
    switch (level) {
        case 3:
            hp = 15
            att = 7
            def = 6
            spd = 3
            xp = 10
            break;
        case 2:
            hp = 12
            att = 4
            def = 3
            spd = 2
            xp = 8
            break;
        default:
            hp = 8
            att = 2
            def = 1
            spd = 2
            xp = 5
    }
    if (dropRate === 5) {
        drops = { name: 'potion', effect: user.health + 10 }
    } else {
        drops = null
    }
    let skeleton = new Monster('skeleton', level,
        Math.floor(Math.random() * 6) + hp,
        Math.floor(Math.random() * 5) + att,
        Math.floor(Math.random() * 5) + def,
        Math.floor(Math.random() * 3) + spd,
        xp, drops
    )
    return skeleton
}


function makeOrc() {
    const dropRate = Math.floor(Math.random() * 5) + 1
    const level = Math.floor(Math.random() * 3) + 2
    let hp, att, def, spd, xp
    switch (level) {
        case 5:
            hp = 21
            att = 9
            def = 7
            spd = 2
            xp = 10
            break;
        case 4:
            hp = 18
            att = 6
            def = 4
            spd = 2
            xp = 8
            break;
        default:
            hp = 12
            att = 4
            def = 2
            spd = 2
            xp = 6
    }
    if (dropRate === 5) {
        drops = assets.armor[2]
    } else {
        drops = null
    }
    let orc = new Monster('orc', level,
        Math.floor(Math.random() * 10) + hp,
        Math.floor(Math.random() * 3) + att,
        Math.floor(Math.random() * 3) + def,
        Math.floor(Math.random() * 4) + spd,
        xp, drops
    )
    return orc
}


function makeTroll() {
    const dropRate = Math.floor(Math.random() * 5) + 1
    const level = Math.floor(Math.random() * 2) + 3
    let hp, att, def, spd, xp
    if (level === 5) {
        hp = 38
        att = 10
        def = 8
        spd = 1
        xp = 14
    } else {
        hp = 25
        att = 8
        def = 6
        spd = 0
        xp = 12
    }
    if (dropRate === 5) {
        drops = assets.weapons[2]
    } else {
        drops = null
    }
    let troll = new Monster('troll', level,
        Math.floor(Math.random() * 8) + hp,
        Math.floor(Math.random() * 5) + att,
        Math.floor(Math.random() * 5) + def,
        Math.floor(Math.random() * 4) + spd,
        xp, drops
    )
    return troll
}


function makeImp() {
    const level = Math.floor(Math.random() * 3) + 3
    let hp, att, def, spd, xp
    switch (level) {
        case 6:
            hp = 14
            att = 3
            def = 3
            spd = 4
            xp = 12
            break;
        case 5:
            hp = 12
            att = 2
            def = 2
            spd = 3
            xp = 9
            break;
        default:
            hp = 10
            att = 1
            def = 1
            spd = 3
            xp = 6
    }
    let imp = new Monster('imp', level,
        Math.floor(Math.random() * 5) + hp,
        Math.floor(Math.random() * 3) + att,
        Math.floor(Math.random() * 4) + def,
        Math.floor(Math.random() * 4) + spd,
        xp,
    )
    return imp
}


function makeDarkElf() {
    const level = Math.floor(Math.random() * 4) + 4
    let hp, att, def, spd, xp
    switch (level) {
        case 8:
            hp = 28
            att = 9
            def = 8
            spd = 4
            xp = 15
            break;
        case 7:
            hp = 26
            att = 8
            def = 7
            spd = 4
            xp = 12
            break;
        case 6:
            hp = 22
            att = 6
            def = 5
            spd = 3
            xp = 10
            break;
        default:
            hp = 18
            att = 5
            def = 4
            spd = 3
            xp = 8
    }
    let darkElf = new Monster('darkElf', level,
        Math.floor(Math.random() * 6) + hp,
        Math.floor(Math.random() * 5) + att,
        Math.floor(Math.random() * 5) + def,
        Math.floor(Math.random() * 3) + spd,
        xp,
    )
    return darkElf
}