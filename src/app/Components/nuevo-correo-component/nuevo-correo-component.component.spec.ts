import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCorreoComponentComponent } from './nuevo-correo-component.component';

describe('NuevoCorreoComponentComponent', () => {
  let component: NuevoCorreoComponentComponent;
  let fixture: ComponentFixture<NuevoCorreoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCorreoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCorreoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
