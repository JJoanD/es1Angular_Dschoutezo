import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaC2Component } from './prova-c2.component';

describe('ProvaC2Component', () => {
  let component: ProvaC2Component;
  let fixture: ComponentFixture<ProvaC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvaC2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvaC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
