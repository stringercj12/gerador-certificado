import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoFormComponent } from './certificado-form.component';

describe('CertificadoFormComponent', () => {
  let component: CertificadoFormComponent;
  let fixture: ComponentFixture<CertificadoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificadoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
