function attackRandomness() {
    let randomNumber = parseInt(Math.random() * 10);

    switch (randomNumber) {
        case 0:
            //lordov gi motivirat nekako
            attacker.attackPower += attacker.people * 1 / 100

            break;

        case 1:
            //Wildlings gi napagjet i gubet lugje - Our scouting troops were ambushed, we lost #__ soldiers.
            break;

        case 2:
            //zimski teski uslovi od studov umiret mnogu lugje - he hard winter condition took #__ casulties.
            break;

        case 3:
            //You encounter a dragon - GOD NO! A huge dragon appeared. His flames ripped through our troops. Gladly we made him flew away, but this encounter cost us #___ of our bravest soldiers.
            break;

        case 4:
            //ally cavalry forces joins you for the attacker. - Ally cavalry forces joins us for this attack. Cheers. Attack Power increased for #___.
            break;

        case 5:
            //#___ deserted the fight. Let them be damned. War is no place for weaklings anyway. 
            //ova mojt da se resit so splice na people i dolu odma recalculate
            break;

        case 6:
            //the enemy surrendered and gave random gold (wealth). Sekoja kukja da imat gold i ko ke padnit 6ka da se odzemit od goldot na napadnatiot da
            //se stajt na toj so napagjat. Ako go imat goldot ok ako ne prodolzvit napadot. The enenemy wanted to surrender but they didnt had the wanted 1000 gold.
            break;

        case 7:
            //the siege camp got a plague soldiers were lost
            break;

        case 8:
            //the enemy suprised us and used wildfire bombs. soldiers died.
            break;

        case 8:
            //notning happend on the way. obicen napad
            break;

        default:
        //obicen napad da se stajt
    }
    console.log(randomNumber);
}

attackRandomness();