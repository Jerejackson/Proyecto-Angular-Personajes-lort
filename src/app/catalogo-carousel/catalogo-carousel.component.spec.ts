import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCarouselComponent } from './catalogo-carousel.component';

describe('CatalogoCarouselComponent', () => {
  let component: CatalogoCarouselComponent;
  let fixture: ComponentFixture<CatalogoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
