import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HacerVentaPage } from './hacer-venta.page';

describe('HacerVentaPage', () => {
  let component: HacerVentaPage;
  let fixture: ComponentFixture<HacerVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacerVentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HacerVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
