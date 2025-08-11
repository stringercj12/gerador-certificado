import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, RouterLink, SecondaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent implements OnInit {

  certificados: Certificado[] = [];
  constructor(private certificadoService: CertificadoService, private router: Router) { }

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
  }

}
