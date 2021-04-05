import { AuthGuardService } from 'src/app/services/authguard/auth-guard.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-managestaffs',
  templateUrl: './managestaffs.component.html',
  styleUrls: ['./managestaffs.component.scss']
})
export class ManagestaffsComponent implements OnInit {
  @ViewChild('previewModal', {}) previewModal: ModalDirective;
  @ViewChild('deleteModal', {}) deleteModal: ModalDirective;
  data = [];
  staffArray = [];
  staffArrayData: any[] = [];
  files: any[] = [];
  outputData: any[] = [];
  staffArrayDataSource: any[] = [];
  hideFiles = false;
  selectedstaff: Staff;
  usrIndex: number;
  uploadLength = 0;
  uploadLimit = 50;
  failedData = [];
  datasFailed = false;
  failedNumber = 0;
  passedNumber = 0;
  response: any;
  selectedstaffDel: Staff;
  search = '';
  currentpge = 1;
  pageLimit = 20;
  hidNxt = false;
  loading = true;
  addValue = 0;
  title: string;
  modalButton: string;
  role = 'STAFF';
  status = 'ACTIVE';
  RoleList = [];
  StatusList = [];
  registerForm: FormGroup;
  loggedInStaff: any;
  createStaffResponse: any;
  createLoading = false;
  updateStaffResponse: any;
  editingStaff = false;
  IsAdmin = true;
  resStaffs = [];
  noStaff = 'No Staff Found';
  unmatchPass = false;
  passMatch = false;

  constructor(
    private router: Router,
    private staffService: StaffService,
    private formBuilder: FormBuilder,
    private authGuardservice: AuthGuardService
    ) {
      this.StatusList = ['ACTIVE', 'INACTIVE', 'REMOVE'];
      this.addValue = (this.currentpge - 1) * this.pageLimit;
    }
  ngOnInit(): void {
    this.getLoginStaff();
    this.selectedstaffDel = new Staff();
    this.StatusList = ['ACTIVE', 'INACTIVE', 'REMOVE'];
    this.RoleList = ['ADMIN', 'STAFF'];
    const currentpge = JSON.parse(sessionStorage.getItem('currentpge'));
    if (currentpge) {
      this.currentpge = currentpge;
      window.sessionStorage.removeItem('currentpge');
    }
    this.addValue = (this.currentpge - 1) * this.pageLimit;
    const hidNxt = JSON.parse(sessionStorage.getItem('hidNxt'));
    if (hidNxt) {
      this.hidNxt = hidNxt;
      window.sessionStorage.removeItem('hidNxt');
    }
    this.getStaffArray();
    this.search = '';
  }

  getLoginStaff(): void {
    // const Staff: any = this.authGuardservice.getStaffFromStorage();
    // const Staff = new Staff;
    // this.loggedInStaff =  Staff[0];
    // if (this.loggedInStaff && this.loggedInStaff.role !== 'ADMIN') {
    //   this.IsAdmin = false;
    //   this.router.navigate(['/']);
    // }
  }

  getStaffArray(): void {
    this.staffArray = [];
    // const StaffArray = JSON.parse(sessionStorage.getItem('MyStaffs'));
    // if (StaffArray) {
    //   this.staffArray = StaffArray;
    //   this.loading = false;
    //   window.sessionStorage.removeItem('MyStaffs');
    // } else {
    //   this.getStaffsPaged();
    // }
  }

  previousPage(): void {
    this.currentpge--;
    this.hidNxt = false;
    this.addValue = (this.currentpge - 1) * this.pageLimit;
    sessionStorage.setItem('currentpge', JSON.stringify(this.currentpge));
    // this.getStaffsPaged();
  }
  nextPage(): void {
    this.currentpge++;
    // this.getStaffsPaged();
    if (this.staffArrayData.length === 0) {
      this.hidNxt = true;
      sessionStorage.setItem('hidNxt', JSON.stringify(this.hidNxt));
    } else {
      this.hidNxt = false;
    }
    this.addValue = (this.currentpge - 1) * this.pageLimit;
    sessionStorage.setItem('currentpge', JSON.stringify(this.currentpge));
  }

  refresh(search): void {
    if (search === '') {
      // this.getStaffsPaged();
    } else {
      this.search = search;
    }
  }

  passCheck(): void {
    // if (this.selectedstaff.password !== '' && this.selectedstaff.password === this.selectedstaff.confirmPassword) {
    //   this.unmatchPass = false;
    //   this.passMatch = true;
    // } else {
    //   this.unmatchPass = true;
    //   this.passMatch = false;
    // }
  }

  changestatus(value): void {
    // this.selectedstaff.status = value;
  }

  changerole(value): void {
    this.selectedstaff.Role = value;
  }

  prevModal(index: number): void {
    this.unmatchPass = false;
    this.passMatch = false;
    this.title = 'Edit Staff';
    this.modalButton = 'Update';
    this.editingStaff = true;
    this.selectedstaff = this.staffArray[index];
    this.previewModal.show();
  }

  createStaff(): void {
    // this.unmatchPass = false;
    // this.passMatch = false;
    // this.title = 'New Staff';
    // this.modalButton = 'Create';
    // this.selectedstaff = { code: '', firstName: '', lastName: '', email: '', password: '',
    //                       confirmPassword: '', phoneNumber: '', status: 'ACTIVE', role: 'Staff' };
    // this.editingStaff = false;
    // this.previewModal.show();
  }

  searchStaff(search): void {
    // this.loading = true;
    // this.currentpge = 1;
    // this.addValue = 0;
    // if (this.search === '') {
    //   this.getStaffsPaged();
    // } else {
    //   this.staffService.searchStaffs(search).subscribe(
    //     async (res) => {
    //       const Staffs = await res;
    //       this.staffArray = Staffs;
    //       this.loading = false;
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    // }
  }

  getStaffs(): void {
    this.staffArray = [];
    // this.loading = true;
    // this.staffService.getStaffs().subscribe(
    //   async (res) => {
    //     const Staffs = await res;
    //     this.staffArray = Staffs;
    //     this.loading = false;
    //     sessionStorage.setItem('MyStaffs', JSON.stringify(this.staffArray));
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  getStaffsPaged(): void {
    const statusnow = 'ACTIVE';
    const skip = (this.currentpge - 1) * this.pageLimit;
    const limit = this.pageLimit;

          this.staffArray = [];
    
    // this.loading = true;
    // const subscription = this.staffService.getStaffsPaged(statusnow, skip, limit).subscribe(
    //   async (res) => {
    //     const Staffs = await res;
    //     this.resStaffs = Staffs;
    //     this.staffArrayData = Staffs;
    //     if (Staffs.length === 0) {
    //       this.currentpge --;
    //       this.hidNxt = true;
    //     } else {
    //       this.staffArray = Staffs;
    //     }
    //     this.addValue = (this.currentpge - 1) * this.pageLimit;
    //     this.loading = false;
    //     sessionStorage.setItem('MyStaffs', JSON.stringify(this.staffArray));
    //     sessionStorage.setItem('currentpge', JSON.stringify(this.currentpge));
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
    // setTimeout(() => {
    //   if (this.resStaffs.length === 0) {
    //     subscription.unsubscribe();
    //     this.loading = false;
    //     this.noStaff = 'Unable to Connect to the Internet';
    //     alert('Unable to load Staffs... kindly, Check your Internet Connection');
    //   }
    // }, 10000);
  }

  closeEdit(): void {
    this.createLoading = false;
    this.previewModal.hide();
  }

  editStaff(): void {
        // if (this.title === 'New Staff') {
        //   if (this.selectedstaff.password !== this.selectedstaff.confirmPassword) {
        //     this.unmatchPass = true;
        //     return;
        //   }
        //   this.createLoading = true;
        //   this.addNewStaff();
        // } else {
        //   this.createLoading = true;
        //   this.updateStaff();
        // }
        // this.previewModal.hide();
  }

  addNewStaff(): void {
    // this.staffService.signUp(this.selectedstaff).subscribe(
    //   async (res) => {
    //     // console.log('SelectedStaff: ', this.selectedStaff);
    //     const response = await res;
    //     this.createStaffResponse = response;
    //     this.createLoading = false;
    //     this.getStaffsPaged();
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.createLoading = false;
    //     this.getStaffsPaged();
    //   }
    // );
    return;
  }

  updateStaff(): void {
    // const { firstName, lastName, phoneNumber, email, status, role } = this.selectedstaff;
    // const ToSend = { firstName, lastName, phoneNumber, email, status, role };
    // this.staffService.update(ToSend).subscribe(
    //   async (res) => {
    //     const response = await res;
    //     this.updateStaffResponse = response;
    //     this.createLoading = false;
    //     this.getStaffsPaged();
    //   },
    //   (err) => {
    //     console.log(err);
    //     this.createLoading = false;
    //     this.getStaffsPaged();
    //   }
    // );
  }

  deletingStaff(index: number): void {
    this.selectedstaffDel = this.staffArray[index];
    this.deleteModal.show();
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteStaff(): void {
    // console.log('selectedStaffDel: ', this.selectedStaffDel);
  //   this.staffService.deleteStaffs(this.selectedstaffDel._id).subscribe(
  //     async (res): Promise<void> => {
  //       this.response = await res;
  //       this.staffArray = [];
  //       window.sessionStorage.removeItem('MyStaffs');
  //       this.getStaffsPaged();
  //     },
  //     (err) => {
  //       console.log(err);
  //       this.getStaffsPaged();
  //     }
  //     )
  //   this.deleteModal.hide();
  // }
  }
}