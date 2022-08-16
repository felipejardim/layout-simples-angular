import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorenComponent } from './loren.component';

describe('LorenComponent', () => {
  let component: LorenComponent;
  let fixture: ComponentFixture<LorenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
