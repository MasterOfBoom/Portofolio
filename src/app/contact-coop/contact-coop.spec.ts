import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCOOP } from './contact-coop';

describe('ContactCOOP', () => {
  let component: ContactCOOP;
  let fixture: ComponentFixture<ContactCOOP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCOOP],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactCOOP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
