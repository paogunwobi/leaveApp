import { BaseClass } from './base';

export class StaffLevel implements BaseClass {
    // tslint:disable-next-line:variable-name
    public readonly id!: number;
    private levelName: string;
    private levelDescription: string;
    
    public get LevelName(): string {
        return this.levelName;
    }
      
    public set LevelName(value: string) {
        this.levelName = value;
    }

    public get LevelDescription(): string {
        return this.levelDescription;
    }
      
    public set LevelDescription(value: string) {
        this.levelDescription = value;
    }
}