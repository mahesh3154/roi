import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectlocationsComponent } from './selectlocations.component';

describe('SelectlocationsComponent', () => {
  let component: SelectlocationsComponent;
  let fixture: ComponentFixture<SelectlocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectlocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
