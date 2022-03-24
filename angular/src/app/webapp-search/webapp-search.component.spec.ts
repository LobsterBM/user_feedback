import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappSearchComponent } from './webapp-search.component';

describe('WebappSearchComponent', () => {
  let component: WebappSearchComponent;
  let fixture: ComponentFixture<WebappSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
