import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.css'],
})
export class LoginWithEmailComponent implements OnInit {
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {}
  back() {
    this.router.navigateByUrl('/login').then(() => window.location.reload());
  }
}
