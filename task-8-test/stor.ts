import { Warechouse } from "./warehouse";

export class Stor {
    constructor(private name: string, private addrass: string, private phoneNumber: number, private warehouse: Warechouse[]) {
        this.name = name;
        this.addrass = addrass;
        this.phoneNumber = phoneNumber;
        this.warehouse = warehouse;
    }

    public getName(): string {
        return this.name
    }
    public getAddrass(): string {
        return this.addrass
    }
    public getPhoneNumber(): number {
        return this.phoneNumber
    }
    public getWarehouse(): Warechouse[] {
        return this.warehouse
    }

    private setName(name: string): void {
        this.name = name;
    }
    private setAddrass(addrass: string): void {
        this.addrass = addrass;
    }
    private setPhoneNumber(phoneNumber: number): void {
        this.phoneNumber = phoneNumber;
    }
    private setWarehouse(warehouse: Warechouse[]): void {
        this.warehouse = warehouse;
    }
}