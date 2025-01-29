import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTypeComponent } from './tv-type.component';

describe('TvTypeComponent', () => {
  let component: TvTypeComponent;
  let fixture: ComponentFixture<TvTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
