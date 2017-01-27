class House {
    constructor(name, symbol, lord, people) {
        this.name = name;
        this.symbol = symbol;
        this.lord = lord;
        this.people = people;
        this.noOfPeople = this.people.length;

        this.calculateHealthPower();
    }
    //funkcija za vnesuvanje populacija / prvicna populacija na kukjite
    addPeople(numberOfPeople) {
        for (let i = 0; i <= numberOfPeople; i++) {
            this.people.push(new Person("Person " + (i + 1)));
        }
    }

    calculateHealthPower() {
        this.attackPower = 0;
        this.health = 0;

        this.people.forEach(function (person, i) {
            this.attackPower += person.attackPower;
            this.health += person.health;
        }, this);

        this.attackPower = Number(this.attackPower.toFixed(2));
        console.log(`${this.name} attack power: ${this.attackPower}, health: ${this.health}`);
    }

    whoAmI() {
        return `House ${this.name}. 
                Symbol ${this.symbol}
                Lord ${this.lord.name}`;
    }

    isRuined() {
        return this.health <= 0;
    }

    canAttack() {
        return this.attackPower > 0;
    }

    recalulatePower(attackPower) {
        let noPeople = attackPower / 100;
        console.log("noPeople", noPeople);
        if (noPeople < this.people.length) {
            this.people.splice(0, noPeople);
            this.calculateHealthPower();
        } else {
            console.log(`${this.name} is ruined`);
            this.health = 0;
        }
    }

    attack(house) {
        if (!this.isRuined() && this.canAttack()) {
            house.recalulatePower(this.attackPower);
            return true;
        } else {
            return false;
        }
    }
}
//Person class------------------------------------------------------------------------------------------------------------------------
class Person {
    constructor(name) {
        this.name = name;
        this.attackPower = Number((Math.random() * 10).toFixed(2));
        this.health = 100;
    }
}
//Lord class------------------------------------------------------------------------------------------------------------------------
class Lord extends Person {
    constructor(name, wealth) {
        super(name);
        this.wealth = wealth;
        this.attackPower += 10;
        this.isKing = false;
    }

    makeKing() {
        this.isKing = true;
        this.attackPower += 3;
    }
}
//randomm int function------------------------------------------------------------
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funkcija za krunisuvanje------------------------------------------------------------
let westeros = {
    crown: function (lords) {
        lords[getRandomInt(0, lords.length - 1)].makeKing();
    }
}

//----------------------------------------------------------------------------------
// let people1 = [];
// for (let i = 0; i <= 1000; i++) {
//     people1.push(new Person("Person " + (i + 1)));
// }
// let john = new Lord('John Snow', 1000);
// let rob = new Lord('Rob Stark', 5000);
// people1.push(john);
// people1.push(rob);
// let stark = new House("Stark", "wolf", rob, people1);

// let people2 = [];
// for (let i = 0; i <= 1000; i++) {
//     people2.push(new Person("Person " + (i + 1)));
// }
// let tywin = new Lord("Tywin Lannister", 30000);
// let jamie = new Lord("Jamie Lannister", 1000);
// let joffrey = new Lord("Joffrey", 300);
// people2.push(tywin, jamie, joffrey);
// //assign king
// westeros.crown([john, rob, tywin, jamie, joffrey]);
// let lannister = new House("Lannister", "lion", tywin, people2);

// console.log(stark, lannister);

// while (true) {
//     if (!stark.attack(lannister)) {
//         console.log("Stark defeated");
//         break;
//     }
//     if (!lannister.attack(stark)) {
//         console.log("Lanister defeated");
//         break;
//     }
// }


//funkcija edna za let people1 so parametri: eden da e array so ime drug da e kolku dusi da imat toest array.legth
//zmej da mojt da vlezit vo bitkava i da otepat lugje
//da se pisit combaat text vo nekoj gole imput
//da mojs da stajs sliki za kukjite
//da se napravi FOR kaj so namesto array.length ke se stavi brojka koja ke moze da se vnesi vo input .. i za tolku pati da se izvrsi funkcijata attack.

//-----------add new house button ------------
$("#addNewHouse").click(function () {
  $('#houseInputs').removeAttr("hidden");
})
// ----------add more lords button ------------
$("#addMoreLords").click(function () {
  $('#lordDiv').append(`<div class="form-group newLordInput">
                <label for="houseLords" class="newLordInput">Lord's Name:</label>
                <input type="text" class="form-control newLordInput" placeholder="enter the name of the lord">
            </div>`);
});

// ----------close the add house inputs ------------
$("#closeButton").click(function () {
  $('#houseInputs').attr("hidden", true);
  $(".newLordInput").remove();
});

// ----------Save house button ------------
$("#saveHouse").click(function () {
  $('#houseInputs').attr("hidden", true);
  $(".newLordInput").remove();
});

// $("#addMoreLords").click(function () {
//     $(this).append(`<div class="form-group">
//     <label for="houseLords">Lord's Name:</label>
//     <input type="text" class="form-control" id="houseLords" placeholder="enter the name of the lord">
// </div>`)
// });

    // ova ke trebit da se desavat na save kopce ko ke se pritisnit
//     $("#houseMenu").append(`<li>${$("#houseName").val()}</li>`); 
// })