import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcolumnComponent } from './customcolumn.component';

describe('CustomcolumnComponent', () => {
  let component: CustomcolumnComponent;
  let fixture: ComponentFixture<CustomcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
