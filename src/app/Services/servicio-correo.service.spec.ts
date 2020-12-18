import { TestBed } from '@angular/core/testing';

import { ServicioCorreoService } from './servicio-correo.service';

describe('ServicioCorreoService', () => {
  let service: ServicioCorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
