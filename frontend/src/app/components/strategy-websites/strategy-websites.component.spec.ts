import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyWebsitesComponent } from './strategy-websites.component';

describe('StrategyWebsitesComponent', () => {
  let component: StrategyWebsitesComponent;
  let fixture: ComponentFixture<StrategyWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyWebsitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
