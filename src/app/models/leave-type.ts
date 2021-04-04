import { BaseClass } from './base';

export class LeaveType implements BaseClass {
    // tslint:disable-next-line:variable-name
    public readonly id!: number;
    private type: string;
    private description: string;
    private maxDays: number;
    private isPreAllocated: boolean;

    public get Type(): string {
        return this.type;
    }
    
    public set Type(value: string) {
        this.type = value;
    }

    public get IsPreAllocated(): boolean {
        return this.isPreAllocated;
    }
    
    public set IsPreAllocated(value: boolean) {
        this.isPreAllocated = value;
    }

    public get Description(): string {
        return this.description;
    }
    
    public set Description(value: string) {
        this.description = value;
    }

    public get MaxDays(): number {
        return this.maxDays;
    }
    
    public set MaxDays(value: number) {
        this.maxDays = value;
    }
}
  