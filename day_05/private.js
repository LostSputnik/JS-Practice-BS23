class CoffeMachine{
    _waterAmount = 0;
    #waterLimit = 200;

    #fixWaterAmount(value){
        if(value < 0)   return 0;
        if(value > this.#waterLimit)    return this.#waterLimit;
    }

    set waterAmount(value){
        if(value < 0){
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }

    constructor(power){
        this._power = power;
    }

    get power(){
        return this._power;
    }
}

let coffeMachine = new CoffeMachine(100);

// coffeMachine.waterAmount = -10;
// coffeMachine.power = 50;


coffeMachine.#fixWaterAmount(50);
// alert(coffeMachine.power);
// alert(coffeMachine.waterAmount);


class CoffeMachine {
    #waterAmount = 0;

    get waterAmount(){
        return this.#waterAmount;
    }

    set waterAmount(value){
        if(value < 0)   value = 0;
        this.#waterAmount = value;
    }
}

let machine = new CoffeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount);