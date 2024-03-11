import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdviseePage } from './advisee.page';

describe('AdviseePage', () => {
  let component: AdviseePage;
  let fixture: ComponentFixture<AdviseePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdviseePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
