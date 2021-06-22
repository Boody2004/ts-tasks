import { Doors } from "./enum/doors";
export class Car {
    private engine: number
    private doors: Doors
    private hasAirBags: boolean
    private model: string
    private topSpeed: number

    constructor(engine: number, doors: Doors, hasAirBags: boolean, model: string, topSpeed: number) {
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

    private checkInitalSpeed (initialSpeed: number) {
        if (initialSpeed < 0 || initialSpeed > this.topSpeed) {
            return 
        }
    }
    
    public accelerate(initialSpeed: number): void{

        this.checkInitalSpeed(initialSpeed)
        
        var sped = initialSpeed

        var myTime = setInterval(() => {
            if (sped < this.topSpeed) {
                console.log(++sped)
            }else {
                clearInterval(myTime);   
            }
        }, 1000);
    }
    public break(initialSpeed: number): void{

        this.checkInitalSpeed(initialSpeed)

        var sped = initialSpeed

        var myTime = setInterval(() => {
            if (sped > 0) {
                console.log(--sped)
            }else {
                clearInterval(myTime);   
            }
        }, 1000);
    }
    public crash(car: Car): void{
        
    }
}