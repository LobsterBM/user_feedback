import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppDetailComponent } from './web-app-detail.component';

describe('WebAppDetailComponent', () => {
  let component: WebAppDetailComponent;
  let fixture: ComponentFixture<WebAppDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAppDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAppDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
