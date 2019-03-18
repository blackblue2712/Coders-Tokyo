const unknowNumber = 10;

class Hero {
	constructor (name, hp, damage) {
		this.name = name;
		this.hp = hp;
		this.damage = damage;
	}
	
	attack (enemy) {
		enemy.applyDamgaed(this.damage);
	}

	applyDamgaed (damage) {
		this.hp -= damage;
	}
}

class RangedHero extends Hero{
	constructor (name, hp, damage, range)  {
		super(name, hp, damage);
		this.range = range;
	}

	attack (enemy) {
		super.attack(enemy);
		this.hp += this.damage/2;
	}
}

class WizHero extends Hero {
	constructor (name , hp, damage, range, mana) {
		super (name , hp, damage);
		this.range = range;
		this.mana = mana;
	}

	attack (enemy) {
		super.attack (enemy	);
		this.mana -= unknowNumber;
	}
}


const heroBasic = new Hero ('Basic', 100, 5);
const heroRanged = new RangedHero ('Ranged', 100, 10, 6);
const heroWiz = new WizHero ('Wiz', 100, 10, 6, 150);

console.log({ heroBasic, heroRanged, heroWiz });

heroRanged.attack(heroBasic);
heroWiz.attack(heroRanged);

console.log( { heroBasic, heroRanged, heroWiz } );
console.log( { heroBasic, heroRanged, heroWiz } );
