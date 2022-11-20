class Tueur
{
    constructor(name,hp)
    {
        this.name = name;
        this.hp = hp;
    }
}

class Caracteristiques
{
    constructor(type, probMour, probDeg, probMourDeg )
    {
        this.type = type;
        this.probMour = probMour;
        this.probDeg = probDeg;
        this.probMourDeg = probMourDeg;
    }
}

class Survivants
{
    constructor(sname,caract){
        this.sname = sname;
        this.caract = caract;
    }
}
    let nom = ['Eva', 'Thomas', 'Pierrick', 'Nicolas', 'Matthieu', 'Martin', 'Flore', 'Apolline', 'Mario'];

    let a = new Caracteristiques('beau-gosse', 0.4, 0.4, 0.2);
    let b = new Caracteristiques('geek',0.1,0.6,0.3);
    let c = new Caracteristiques('blonde', 0.3, 0.4, 0.2);
    let d = new Caracteristiques('le scout perdu', 0.1, 0.7, 0.2);
    let e = new Caracteristiques('la moche courageuse', 0.2, 0.7, 0.1);

    let caract = [a,b,c,d,e];

let vnom = [];
let vcara = [];

for (let surv = 0; surv < 5; surv++ ) {
    let first = Math.floor(Math.random() * nom.length);
    let lenom = nom[first];
    nom.splice([first], 1);

    let second = Math.floor(Math.random() * caract.length);
    let lacara = caract[second];
    caract.splice([second], 1);

    vnom.push(lenom);
    vcara.push(lacara);
}

let surv1 = new Survivants(vnom[0],vcara[0]);
let surv2 = new Survivants(vnom[1],vcara[1]);
let surv3 = new Survivants(vnom[2],vcara[2]);
let surv4 = new Survivants(vnom[3],vcara[3]);
let surv5 = new Survivants(vnom[4],vcara[4]);

let surv =[surv1,surv2,surv3,surv4,surv5];

let Jason = new Tueur('Jason',100);

while (Jason.hp > 0 && surv.length > 0) {
    let choisi = surv[Math.floor(Math.random() * surv.length)];
    let chance = Math.round(Math.random()*100)/100;
    if (chance <= choisi.caract.probMour){
        surv.splice(chance, 1);
    }
    else if (chance <= choisi.caract.probDeg){
        Jason.hp = Jason.hp - 10;
    }

    else {
        Jason.hp = Jason.hp - 10;
        surv.splice(chance, 1);
    }
    if (Jason.hp <= 0 && surv.length <= 0){
        'C est une égalité, Jason et les survivants sont morts...'
    }

    else if (Jason.hp <= 0){
        console.log('Jason est mort, vous avez gagné ! Il reste ' + surv.length + ' survivant(s).')
    }

    else if (surv.length <= 0){
        console.log('Il reste 0 survivant, vous avez perdu... Il reste a ' + Jason.name +' ' + Jason.hp + ' hp...')
    }
}








