import { BaseClass } from './base';
import { LeaveType } from './leave-type';
import { Staff } from './staff';
import { Status } from './status';

export class Leave implements BaseClass{
  // tslint:disable-next-line:variable-name
  public readonly id!: number;
  private status: Status = Status.PENDING;
  private description: string;
  private leaveType: LeaveType;
  private staff: Staff;
  private approver: Staff;
  private totalLeaveDays: number;
  private leaveStartDate: Date;
  private leaveEndDate: Date;
  private resumptionDate: Date;

  public get LeaveType(): LeaveType {
    return this.leaveType;
  }

  public set LeaveType(value: LeaveType) {
    this.leaveType = value;
  }

  public get Staff(): Staff {
    return this.staff;
  }

  public set Staff(value: Staff) {
    this.staff = value;
  }

  public get Description(): string {
    return this.description;
  }

  public set Description(value: string) {
    this.description = value;
  }

  public get Approver(): Staff {
    return this.approver;
  }

  public set Approver(value: Staff) {
    this.approver = value;
  }

  public get TotalLeaveDays(): number {
    return this.totalLeaveDays;
  }

  public set TotalLeaveDays(value: number) {
    this.totalLeaveDays = value;
  }

  public get Status(): Status {
    return this.status;
  }

  public set Status(value: Status) {
    this.status = value;
  }

  public get LeaveStartDate(): Date {
    return this.leaveStartDate;
  }

  public set LeaveStartDate(value: Date) {
    this.leaveStartDate = value;
  }

  public get LeaveEndDate(): Date {
    return this.leaveEndDate;
  }

  public set LeaveEndDate(value: Date) {
    this.leaveEndDate = value;
  }

  public get ResumptionDate(): Date {
    return this.resumptionDate;
  }

  public set ResumptionDate(value: Date) {
    this.resumptionDate = value;
  }

}
