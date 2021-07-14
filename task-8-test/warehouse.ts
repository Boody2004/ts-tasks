// import { Catogries } from "./enum/catogries";
import { Brands } from "./enum/brand";
import { Prodct } from "./prodct";

export class Warechouse {
    constructor(private products: Prodct[], private brand: Brands, private number: number, private addrass: string) {
        this.products = products;
        this.brand = brand;
        this.number = number;
        this.addrass = addrass;
    }
    public getProducts(): Prodct[] {
        return this.products
    }
    public getBrand(): Brands {
        return this.brand
    }
    public getNumber(): number {
        return this.number
    }
    public getAddrass(): string {
        return this.addrass
    }

    private setProducts(products: Prodct[]): void {
        this.products = products;
    }
    private setName(brand: Brands): void {
        this.brand = brand;
    }
    private setNumber(number: number): void {
        this.number = number;
    }
    private setAddrass(addrass: string): void {
        this.addrass = addrass;
    }

    // getCountByCatogry (catogry: Catogries) {
    //     this.products.filter((product: ProdctrList) => {
    //         return product.catogries === catogry
    //     })
    // }
}