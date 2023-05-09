import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraLivroComponent } from './cadastra-livro.component';

describe('CadastraLivroComponent', () => {
  let component: CadastraLivroComponent;
  let fixture: ComponentFixture<CadastraLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
