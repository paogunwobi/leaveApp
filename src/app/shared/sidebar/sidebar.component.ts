import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public uiBasicCollapsed = false;
  public samplePagesCollapsed = false;

  constructor() { }

  ngOnInit(): void {
    // this.getLoginUser();
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', () => {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', () =>  {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }


  // getLoginUser(): void {
  //   const user: any = this.authGuardservice.getUserFromStorage();
  //   this.selecteduser =  user[0];
  //   if (!this.selecteduser) {
  //     this.router.navigate(['/login']);
  //   }
  //   if (this.selecteduser && this.selecteduser.role !== 'ADMIN') {
  //     this.IsAdmin = false;
  //     // this.router.navigate(['/']);
  //   }
  // }

}
