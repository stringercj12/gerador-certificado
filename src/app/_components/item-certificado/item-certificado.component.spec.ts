import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCertificadoComponent } from './item-certificado.component';

describe('ItemCertificadoComponent', () => {
  let component: ItemCertificadoComponent;
  let fixture: ComponentFixture<ItemCertificadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCertificadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
