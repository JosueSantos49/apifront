import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  mensagem: string | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userService.forUser().subscribe(
      resposta => {
        console.log(resposta);
        this.mensagem = resposta;
      },
      (error) => {
        console.log(error)
      }
    );
  }


}
