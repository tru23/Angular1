import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormComponent } from './detail-form.component';

describe('DetailFormComponent', () => {
  let component: DetailFormComponent;
  let fixture: ComponentFixture<DetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFormComponent]
    });
    fixture = TestBed.createComponent(DetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
