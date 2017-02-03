function attackRandomness() {
    let randomNumber = parseInt(Math.random()*10);

    switch(randomNumber) {
        case 0:
        //lordov gi motivirat nekako
        attacker.attackPower += attacker.people*1/100

        break;

        case 1:
        //Wildlings gi napagjet i gubet lugje
        break;

        case 2:
        //zimski teski uslovi od studov umiret mnogu lugje
        break;

        case 3:
        //You encounter a dragon
        break;

        case 4:
        //ally cavalry forces joins you for the attacker
        break;

        case 5:
        //vojnici dezertiret
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

        default:
        //obicen napad da se stajt
    }
    console.log(randomNumber);
  }

  attackRandomness();