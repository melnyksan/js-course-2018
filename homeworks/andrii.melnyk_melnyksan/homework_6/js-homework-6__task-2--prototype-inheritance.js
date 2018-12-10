// Task 6.2 Prototype Inheritance

class Horse {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Racer extends Horse {
    constructor(name, breed) {
        super(name, breed);

        this.distance = 0;
        this.speed = 0;
        this.setSpeed();
    }

    setSpeed() {
        const min = 10;
        const max = 15;

        this.speed = Math.floor(Math.random() * (max - min + 1) + min);
    }

    run() {
        let timer = 1000;

        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                this.distance += this.speed;
                this.setSpeed();
            }, timer);
            timer += 1000;
        }
    }
}

class Race {
    constructor() {
        this.horses = [];
    }

    createRace() {
        const horseNames = ['Discharge', 'Lightning', 'Bolt', 'Turtle', 'Lame', 'Cutie',
            'Vanilla', 'Temper', 'Inner Light', 'Fender', 'Mockingbird', 'Black Shadow',
            'Symphony', 'Sea Wind', 'Grape', 'Dreamer', 'Black Star', 'Picasso', 'Shine',
            'Banjo', 'Dark Stalker', 'Starshine', 'Mustard', 'Blazer', 'Rally', 'Panda',
            'Serendipity', 'Sprout', 'Rococo', 'Hobbit', 'Gadget'];
        const horseBreeds = ['Thoroughbred', 'Quarter Horse', 'Arabian', 'Standardbred',
            'Appaloosa', 'Andalusian'];

        for (let i = 0; i < 10; i++) {
            const randomHorseName = horseNames[Math.floor(Math.random() * 31)];
            const randomHorseBreed = horseBreeds[Math.floor(Math.random() * 6)];

            this.horses.push(new Racer(randomHorseName, randomHorseBreed));
        }
    }

    startRace() {
        this.horses.forEach(racer => racer.run());

        let timer = 2000;

        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log(' ');
                this.horses.forEach((racer) => {
                    console.log(`${racer.distance} - ${racer.name} ${racer.breed}`);
                });
            }, timer);
            timer += 2000;
        }
    }

    showResult() {
        const racingTime = 10000;

        setTimeout(() => {
            this.horses.sort((a, b) => b.distance - a.distance);

            const winner = `\nThe Winner is ${this.horses[0].name} ${this.horses[0].breed}\n`;
            const underscore = '_'.repeat(winner.length - 2).concat('\n');
            console.log(underscore + winner + underscore);

            this.horses.forEach((racer) => {
                console.log(`${racer.distance} - ${racer.name} ${racer.breed}`);
            });
            console.log(' ');
        }, racingTime);
    }
}

const race = new Race();
race.createRace();
race.startRace();
race.showResult();
