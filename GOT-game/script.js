class House {
    constructor(name, symbol, lords, people) {
        this.name = name;
        this.symbol = symbol;
        this.lords = lords;
        this.people = people;
        this.noOfPeople = this.people.length;

        this.calculateHealthPower();
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

    recalculatePower(attackPower) {
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

    // attack(attacker, attacked) {
    //     if (!attacker.isRuined() && attacker.canAttack()) {
    //         attacked.recalculatePower(attacker.attackPower);
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}
//funkcija za dodavanje na text vo textarea------------------
function addText(textarea, text) {
    $(textarea).val($(textarea).val()+ text +"\n"); 
}
//funkcija za napad-----------------
 function attack(attacker, attacked) {
     if (allHouses.includes(attacked)) {
        if (!attacker.isRuined() && attacker.canAttack()) {
            //ovde trebit da se stavit ako nesto se desit pred napadot so random od 0-10 i da se naprajt recalculate power i za napagjacot i posle da se napadnit
            attacked.recalculatePower(attacker.attackPower);

            addText(`#combatTextfor${attacker.name}`, `${attacker.name} has gathered the troops and started and attack on ${attacked.name}. \nThe fight is over, we managed to kill ${parseInt(attacked.attackPower / 100)} ${attacked.name}s.`);
            addText(`#combatTextfor${attacked.name}`, `We were attacked by House ${attacker.name}. \nAfter the attack we got ${attacked.attackPower} attack power left, and ${attacked.health} health left. \nWe suffered ${parseInt(attacked.attackPower / 100)} deaths.`);
            return true;
        } else {
            return false;
        }
    }else {
        alert("Please enter a valid house name (name is case sensitive)");
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
    constructor(name) {
        super(name);
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
//-funkcija za vnesuvanje lordovi----------------------------------
function getLords(selector) {
    let houseLords = [];
    $(selector).each(function () {
        let lord = $(this).val();
        let lordObj = new Lord(lord);
        allLords.push(lordObj);
        houseLords.push(lordObj);
    });
    return houseLords;
}

//funkcija za vnesuvanje populacija / prvicna populacija na kukjite
function addPeople(numberOfPeople) {
    let people = [];
    for (let i = 1; i <= numberOfPeople; i++) {
        people.push(new Person("Person " + i));
    }
    return people;
}
//funkcija za listanje na lordovite od lista----za pecatenje
function listLords(lords) {
    let lordsList = '';
    for (i = 0; i < lords.length; i++) {
        let lordsName = lords[i].name;
        lordsList += lordsName + ", ";
    }
    return lordsList;
}
//-----------------------------------
let allLords = [];
let allHouses = [];
//-----------add new house button ------------
$("#addNewHouse").click(function () {
    $('#houseInputs').removeAttr("hidden");
})
// ----------add more lords button ------------
$("#addMoreLords").click(function () {
    if ($('.lords').val() == '') {
        alert("Please enter first Lord's name first");
    }
    else {
        $('#lordDiv').append(`<div class="form-group newLordInput">
                    <label for="houseLords" class="newLordInput">Lord's Name:</label>
                    <input type="text" class="form-control newLordInput lords" placeholder="name of the lord">
        </div>`);
    }
});

// ----------close the add house inputs ------------
$("#closeButton").click(function () {
    $('#houseInputs').attr("hidden", true);
    $(".newLordInput").remove();
});
// ----------Save house button ------------
$("#saveHouse").click(function () {

    let houseName = $("#houseName").val();
    let housePopulation = $("#housePop").val();
    let symbol = $("#symbol").val();
    let lords = getLords(".lords");
    let population = addPeople(housePopulation);
    let lordAndPop = population.concat(lords);

    //za verifikacija na lordovi polinjata... vekje vneseno
    // let verifyLords = $(".lords").each(function () {
    //     if ($('.lords').val() == '') {
    //         return false;
    //     }
    // })
    //kreiranje na kukja-------------------------------------------------------------------
    if (houseName == '' || housePopulation == '' || symbol == '' || lords == '' || population == '' || $('.lords').val() == '') {
        alert("Please fill all the empty inputs");
    }

    else {
        let house = new House(houseName, symbol, lords, lordAndPop);
        allHouses.push(house);
        $("#houseMenu").append(`<li><input type="button" class="btn btn-default btn-lg" value="${house.name}" id="button${houseName}"</li>`);
        $("#main").append(`
        <div class="row houseRow" id="row${houseName}" hidden>
    <div class="col-sm-4">
        <h3><b>House:</b> ${houseName}</h3>
        <img src="${symbol}" class="img-thumbnail houseImage">
        <p><b>Lords:</b> ${listLords(lords)}</p>
        <p><b>Population:</b> ${house.noOfPeople}</p>
        <p><b>Attack Power:</b> ${house.attackPower}</p>
        <p><b>Health:</b> ${house.health}</p>
    </div>
    <div class="col-sm-4">
        <h3></h3>
        <div class="form-group">
            <input type="text" class="btn btn-default" id="${house.name}Attack" placeholder="enter a house name to attack">
            <input type="button" class="btn btn-default" id="attackButton${house.name}" value="Attack">
        </div>
        <div class="form-group">
            <label for="combatText">Combat Text:</label><br>
            <textarea id="combatTextfor${house.name}" readonly></textarea>
        </div>
        <div class="form-group">
            <input type="button" class="btn btn-default" id="clearCombatTextFor${house.name}" value="Clear">
        </div>
    </div>
</div>`);

        //----kopce za napad na druga kukja----------------------------------------------------------------
        $(`#attackButton${house.name}`).click(function () {
            let attackedHouseIndex;
            allHouses.forEach(function (element, i) { 
                if(element.name == $(`#${house.name}Attack`).val()) {
                    attackedHouseIndex = i;
                }
             })
             let attackerHouseIndex; 
             allHouses.forEach(function (element, i) { 
                if(element.name == house.name) {
                    attackerHouseIndex = i;
                }
             })
             console.log(attackedHouseIndex);
             console.log(house.name);
             console.log($(`#${house.name}Attack`).val());
              console.log(attackerHouseIndex);
              console.log(allHouses);

            attack(allHouses[attackerHouseIndex], allHouses[attackedHouseIndex]);
        });



        //---kopce za citenje na combat text---------------------------------------------------------------
        $(`#clearCombatTextFor${house.name}`).click(function () {
            $(`#combatTextfor${house.name}`).val('');   
        });

        //---unikatno kopce za trganje i postavuvanje na attributot hidden od rowot za unikatna kukja--
        $(`#button${houseName}`).click(function () {
            if ($(`#row${houseName}`).css('display') == 'none') {
                $(`#row${houseName}`).removeAttr("hidden");
            } else {
                $(`#row${houseName}`).attr("hidden", true);
            }
        });
        //---brisenje na polinata za dodavanje novi kukji
        $("#houseName").val('');
        $("#housePop").val('');
        $("#symbol").val('');
        $(".lords").each(function () {
            $(".lords").val('');
        });
        $('#houseInputs').attr("hidden", true);
        $(".newLordInput").remove();
        console.log(house);
    }
});



