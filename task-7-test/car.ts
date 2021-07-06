import { Doors } from "./enum/doors";
export class Car {

    constructor(private engine: number, private doors: Doors, private hasAirBags: boolean, private model: string, private topSpeed: number) {
        this.engine = engine;
        this.doors = doors;
        this.hasAirBags = hasAirBags;
        this.model = model;
        this.topSpeed = topSpeed;
    }

    public getEngine(): number {
        return this.engine
    }
    public getDoors(): Doors {
        return this.doors
    }
    public getHasAirBags(): boolean {
        return this.hasAirBags
    }
    public getModel(): string {
        return this.model
    }
    public getTopSpeed(): number {
        return this.topSpeed
    }

    private setEngine(cc: number): void {
        this.engine = cc;
    }
    private setDoors(doors: Doors): void {
        this.doors = doors;
    }
    private setHasAirBags(hasAirBags: boolean): void {
        this.hasAirBags = hasAirBags;
    }
    private setModel(modle: string): void {
        this.model = modle;
    }
    private setTopSpeed(topSpeed: number): void {
        this.topSpeed = topSpeed;
    }

    private checkInitalSpeed (initialSpeed: number): boolean {
        return initialSpeed < 0 || initialSpeed > this.topSpeed;
    }
    
    public accelerate(initialSpeed: number): void{

        if(this.checkInitalSpeed(initialSpeed)) return
        
        var speed = initialSpeed

        var myTime = setInterval(() => {
            speed < this.topSpeed
                ?console.log(++speed)
                :clearInterval(myTime);   
        }, 1000);
    }
    public break(initialSpeed: number): void{

        if(this.checkInitalSpeed(initialSpeed)) return

        var speed = initialSpeed

        var myTime = setInterval(() => {
            speed > 0
                ?console.log(--speed)
                :clearInterval(myTime);   
        }, 1000);
    }
    public crash(car: Car): void{
        if (car.getHasAirBags() && this.getHasAirBags()) {
            console.log('No one dies')
        } 
        if (!car.getHasAirBags() && this.getHasAirBags()) {
            console.log(`Lucky you didn't die`)
        } 
        if (car.getHasAirBags() && !this.getHasAirBags()) {
            console.log('You died!')
        } 
        if (!car.getHasAirBags() && !this.getHasAirBags()) {
            console.log('You both died!')
        } 
    }
}