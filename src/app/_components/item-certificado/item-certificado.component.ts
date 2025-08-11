import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.scss'
})
export class ItemCertificadoComponent {

  @Input() id: string = '';
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';

  constructor(private router: Router) { }


  redirecionaCertificado() {
    this.router.navigate(['certificados', this.id]);
  }
}
