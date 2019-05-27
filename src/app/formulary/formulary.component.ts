import { FormularyService } from './formulary.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.scss']
})
export class FormularyComponent implements OnInit {

  formulario: FormGroup;

  hasInfo =  false;

  constructor(private service: FormularyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      user_login: new FormControl(null, [Validators.required]),
      user_password: new FormControl(null, [Validators.required])
    });

    this.route.params.subscribe(u => {
      if (u.id) {

        this.hasInfo = true;

        this.service.GetById(u.id).subscribe( data => {
          this.formulario.setValue({
            id: data.id,
            nome: data.nome,
            email: data.email,
            user_login: data.user_login,
            user_password: ''
          });
        },
        er => {

        });
      }

    });
  }

  add(form) {
    if (!form.invalid) {
      this.service.Add(form.value).subscribe( data => {
        this.router.navigateByUrl('/');
      },
      er => {

      });
    }
  }

  edit(form) {
    if (!form.invalid) {
      debugger
      this.service.Edit(form.value).subscribe( data => {
        this.router.navigateByUrl('/');
      }, er => {

      });
    }
  }

}
