import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MussunComponent } from './mussun.component';

describe('MussunComponent', () => {
  let component: MussunComponent;
  let fixture: ComponentFixture<MussunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MussunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MussunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
