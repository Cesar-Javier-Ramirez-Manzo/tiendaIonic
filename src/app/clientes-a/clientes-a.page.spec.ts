import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesAPage } from './clientes-a.page';

describe('ClientesAPage', () => {
  let component: ClientesAPage;
  let fixture: ComponentFixture<ClientesAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
