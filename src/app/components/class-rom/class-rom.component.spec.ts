import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRomComponent } from './class-rom.component';

describe('ClassRomComponent', () => {
  let component: ClassRomComponent;
  let fixture: ComponentFixture<ClassRomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassRomComponent ]
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
