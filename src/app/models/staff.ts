import { BaseClass } from './base';
import { Role } from './role';
import { StaffLevel } from './staff-level';
import { StaffStatus } from './staff-status';

export class Staff implements BaseClass{
  // tslint:disable-next-line:variable-name
  public readonly id!: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private password: string;
  private status: StaffStatus = StaffStatus.ACTIVE;
  private role: Role = Role.STAFF;
  private phoneNumber: string;
  private staffLevel: StaffLevel;
  private eligible: boolean = false;

  public get FirstName(): string {
    return this.firstName;
  }

  public set FirstName(value: string) {
    this.firstName = value;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public set LastName(value: string) {
    this.lastName = value;
  }

  public get Email(): string {
    return this.email;
  }

  public set Email(value: string) {
    this.email = value;
  }

  public get StaffLevel(): StaffLevel {
    return this.staffLevel;
  }

  public set StaffLevel(value: StaffLevel) {
    this.staffLevel = value;
  }

  public get Eligible(): boolean {
    return this.eligible;
  }

  public set Eligible(value: boolean) {
    this.eligible = value;
  }

  public get Status(): StaffStatus {
    return this.status;
  }

  public set Status(value: StaffStatus) {
    this.status = value;
  }

  public get Role(): Role {
  return this.role;
  }

  public set Role(value: Role) {
    this.role = value;
  }

  public get Password(): string {
    return this.password;
  }

  public set Password(value: string) {
    this.password = value;
  }

  public get PhoneNumber(): string{
    return this.phoneNumber;
  }

  public set PhoneNumber(value: string) {
    this.phoneNumber = value;
  }

}
