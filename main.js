console.log('linked')

// let firstNames = document.querySelectorAll(".first-name")
// let lastNames = document.querySelectorAll(".last-name")
// let ages = document.querySelectorAll(".age")

let ul = document.querySelector("ul")

class Player {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.mp = 50;
    this.attack = 30;
    this.defense = 5;
    this.status = 'alive';
  }
}

class Archer extends Player {
  constructor(name) {
    super();
    this.name = name;
    this.mp -= 25;
    this.attack -= 3;
    this.defense += 10;
    updateScreen(this);
  }
}

class BlackMage extends Player {
  constructor(name) {
    super();
    this.name = name;
    this.hp -= 40;
    this.mp += 80;
    this.attack -= 25;
    this.defense -= 5;
    updateScreen(this);
  }

}

class Knight extends Player {
  constructor(name) {
    super();
    this.name = name;
    this.hp += 50;
    this.mp -= 40;
    this.attack += 10;
    this.defense += 15;
    updateScreen(this);
  }
}

let bob = new Knight('Bob')

// let mages = [
//   new BlackMage('Dingle'), 
//   new BlackMage('Dangle'),
//   new BlackMage('Dongle')
// ];

// for(let i = 0; i < mages.length; i++) {
//   let li = document.createElement("li")
//   let li2 = document.createElement("li")
//   let li3 = document.createElement("li")
//   let li4 = document.createElement("li")
//   let li5 = document.createElement("li")


//   // li.setAttribute("id", "li-" + i)

//   li.innerHTML = `<h1 style="color: blue"> Name: ${mages[i].name} </h1>`
//   li2.innerHTML = `HP ${mages[i].hp}`
//   li3.innerHTML = `MP ${mages[i].mp}`
//   li4.innerHTML = `Attack ${mages[i].attack}`
//   li5.innerHTML = `Defense ${mages[i].defense}`



//   ul.appendChild(li)
//   ul.appendChild(li2)
//   ul.appendChild(li3)
//   ul.appendChild(li4)
//   ul.appendChild(li5)

//   console.log(li)
// }

function updateScreen(character) {
  let title = document.createElement('h1');
  let hp = document.createElement('p');
  let mp = document.createElement('p');

  let charName = document.createTextNode(character.name);
  let charHp = document.createTextNode(character.hp);
  let charMp = document.createTextNode(character.mp);

  title.appendChild(charName);
  hp.appendChild(charHp);
  mp.appendChild(charMp);

  let x = document.getElementById('characters');

  x.appendChild(title);
  x.appendChild(hp);
  x.appendChild(mp);

}


 