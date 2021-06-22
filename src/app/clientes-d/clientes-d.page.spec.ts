import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesDPage } from './clientes-d.page';

describe('ClientesDPage', () => {
  let component: ClientesDPage;
  let fixture: ComponentFixture<ClientesDPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
