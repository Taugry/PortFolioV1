import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTechComponent } from './comp-tech.component';

describe('CompTechComponent', () => {
  let component: CompTechComponent;
  let fixture: ComponentFixture<CompTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
