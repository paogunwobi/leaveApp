import { BaseClass } from './base';
import { Staff } from './staff';

export class Department implements BaseClass {
    // tslint:disable-next-line:variable-name
    public readonly id!: number;
    private name: string;
    private description: string;
    private lineManager: Staff;

    public get Name(): string {
        return this.name;
    }
    
    public set Name(value: string) {
        this.name = value;
    }

    public get Description(): string {
        return this.description;
    }
    
    public set Description(value: string) {
        this.description = value;
    }

    public get LineManager(): Staff {
        return this.lineManager;
    }
    
    public set LineManager(value: Staff) {
        this.lineManager = value;
    }
}
