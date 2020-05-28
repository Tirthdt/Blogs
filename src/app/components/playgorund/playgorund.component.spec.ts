import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygorundComponent } from './playgorund.component';

describe('PlaygorundComponent', () => {
  let component: PlaygorundComponent;
  let fixture: ComponentFixture<PlaygorundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygorundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygorundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
