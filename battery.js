class Battery {
    energy;

    constructor(energy) {
        this.energy = energy;
    }

    getenergy() {
        return this.energy;
    }

    setenergy() {
        this.energy;
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}