import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroVentasPage } from './registro-ventas.page';

describe('RegistroVentasPage', () => {
  let component: RegistroVentasPage;
  let fixture: ComponentFixture<RegistroVentasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroVentasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroVentasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
