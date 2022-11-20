class Personnage {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

niqueVie(){
    let musique = ['Anissa-Wejdene','2','3','4','5'];
    let rand = Math.floor(Math.random() * musique.length) | 0;
    let rValue = musique[rand];

    let wej = musique[0];

    if (rValue === wej){
        return true
    }
    else {
        return false
    }

}

jeu(personnage){
    if(this.niqueVie()){
        personnage.hp = personnage.hp -1 ;
        console.log('Mauvaise musique, '+ personnage.name + ' perd 1 vie ce qui fait ' + personnage.hp + ' vies' );
    }
    else{
        console.log('Bonne musique, '+ personnage.name + ' à ' + personnage.hp + ' vies')
    }
}
}

let John = new Personnage('John',10);

for (let feuxrouges = 0; feuxrouges < 30; feuxrouges++ ){
    John.jeu(John);
    if (John.hp <= 0) {
        console.log('Perdu, '+ personnage.name + ' à 0 vie')
        throw new Error("Vous avez perdu");
    }
}
console.log('Arrivé à la maison vivant')


