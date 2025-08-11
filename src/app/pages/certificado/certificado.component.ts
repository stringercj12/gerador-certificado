import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import html2canvas from 'html2canvas';
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { CertificadoService } from '../../_services/certificado.service';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [RouterLink, SecondaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent {
  id: string | null = null;
  certificado: Certificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(private certificadoService: CertificadoService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id);
    })
  }

  downloadCertificado() {
    if (this.certificado == undefined) {
      return
    }

    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `certificado_${this.certificado?.nome.replaceAll(' ', '_')}.png`;
      link.click();
    });
  }
}
