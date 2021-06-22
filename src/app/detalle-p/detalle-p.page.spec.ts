import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePPage } from './detalle-p.page';

describe('DetallePPage', () => {
  let component: DetallePPage;
  let fixture: ComponentFixture<DetallePPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
