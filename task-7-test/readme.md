# Cars Task

## Cars Class:
- Create `Car` class
- Create 5 private properties
  - `engine: number` (for example: 1100 cc or 1500 cc)
  - `doors: Doors` [Enum] (for example 2 doors or 4 doors)
  - `hasAirBags: boolean`
  - `model: string`
  - `topSpeed: number`
- Create 5 public getter methods
  - `getEngine(): number`
  - `getDoors(): Doors`
  - `getHasAirBags(): boolean`
  - `getModel(): string`
  - `getTopSpeed(): number`
- Create 5 private setters methods
  - `setEngine(cc: number): void`
  - `setDoors(doors: Doors): void`
  - `setHasAirBags(hasAirBags: boolean): void`
  - `setModel(model: string): void`
  - `setTopSpeed(topSpeed: number): void`
- Create 3 public methods
  - `accelerate(initialSpeed: number): void`
    - This method logs in console the speed every 1 s and
    increase it until it reach `topSpeed`.
    - `initialSpeed` should be a number and greater than
    or equal to `0`
  - `break(initialSpeed: number): void`
    - This method logs in console the speed every 1 s and
    decrease it until it reach `0`.
  - `crash(car: Car): void`
    - This method logs in console what happens if this car
    crashed with another car
      - If both cars have air bags, log **No one dies**
      - If this car only has air bags, log **Lucky you didn't die**
      - If the other car only has air bags, log **You died!**
      - If both cars have no air bags, log **You both died!**

------------------------------------------------------
|            Requirement             |     Mark      |
|:----------------------------------:|:-------------:|
| engine                             |      0/2      |
| doors                              |      0/2      |
| hasAirBags                         |      0/2      |
| model                              |      0/2      |
| topSpeed                           |      0/2      |
|                 -                  |       -       |
| getEngine()                        |      0/5      |
| getDoors()                         |      0/5      |
| getHasAirBags()                    |      0/5      |
| getModel()                         |      0/5      |
| getTopSpeed()                      |      0/5      |
|                 -                  |       -       |
| setEngine(cc: number)              |      0/6      |
| setDoors(doors: Doors)             |      0/6      |
| setHasAirBags(hasAirBags: boolean) |      0/6      |
| setModel(model: string)            |      0/6      |
| setTopSpeed(topSpeed: number)      |      0/6      |
|                 -                  |       -       |
| accelerate(initialSpeed: number)   |      0/10     |
| break(initialSpeed: number)        |      0/10     |
| crash(car: Car)                    |      0/15     |
|                 -                  |       -       |
|               Total                |      0/100    |
------------------------------------------------------