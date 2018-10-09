import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContactsDataComponent } from './all-contacts-data.component';

describe('AllContactsDataComponent', () => {
  let component: AllContactsDataComponent;
  let fixture: ComponentFixture<AllContactsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllContactsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContactsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
