import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageDetailPage } from './page-detail.page';

describe('PageDetailPage', () => {
  let component: PageDetailPage;
  let fixture: ComponentFixture<PageDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
