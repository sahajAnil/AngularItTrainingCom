import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DIGITALMARKETINGComponent } from './digitalmarketing.component';

describe('DIGITALMARKETINGComponent', () => {
  let component: DIGITALMARKETINGComponent;
  let fixture: ComponentFixture<DIGITALMARKETINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DIGITALMARKETINGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DIGITALMARKETINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
