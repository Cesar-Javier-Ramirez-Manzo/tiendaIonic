import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealizarVentaPage } from './realizar-venta.page';

describe('RealizarVentaPage', () => {
  let component: RealizarVentaPage;
  let fixture: ComponentFixture<RealizarVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarVentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealizarVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
