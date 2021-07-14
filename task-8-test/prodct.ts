import { Catogries } from "./enum/catogries";

export class Prodct {
    constructor(private catogry: Catogries, private name: string, private price: number ) {
        this.name = name;
        this.price = price;
        this.catogry = catogry;
    }
    
    public getCatogry(): Catogries {
        return this.catogry
    }
    public getName(): string {
        return this.name
    }
    public getPrice(): number {
        return this.price
    }
    
  
    private setCatogry(catogry: Catogries): void {
        this.catogry = catogry;
    }

    private setName(name: string): void {
        this.name = name;
    }
    private setPrice(price: number): void {
        this.price = price;
    }
}