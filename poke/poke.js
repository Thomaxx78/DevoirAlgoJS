class Pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck= luck;
    }

    attackPokemon(pokemon){
        if (this.isLucky()){
            let damage = this.attack - pokemon.defense
            pokemon.hp += damage
            console.log(this.name + ' attaque réussis')
        }
        else {
            console.log(this.name + ' Attaque raté')
        }
    }

    isLucky(){
        return this.luck < Math.random();
    }
}

let Mewto = new Pokemon( 'Mewto', 110,90,110, 0.7);
let Tortank = new Pokemon('Tortank', 85,100,80,0.3);

while (Mewto.hp > 0 && Tortank.hp > 0){

    console.log('Mewto essaye d attaquer')
    Mewto.attackPokemon(Tortank);

    if (Tortank.hp <= 0){
        console.log('Tortank est KO')
        break
    }

    console.log('Tortank essaye d attaquer')
    Tortank.attackPokemon(Mewto);
    if (Mewto.hp <= 0){
        console.log('Mewto est KO')
        break
    }
}