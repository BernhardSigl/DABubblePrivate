import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeMessageComponent } from './distribute-message.component';

import { Firestore } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

class FirestoreStub {}

describe('DistributeMessageComponent', () => {
  let component: DistributeMessageComponent;
  let fixture: ComponentFixture<DistributeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, DistributeMessageComponent],
      // declarations: [DistributeMessageComponent],
      providers: [{ provide: Firestore, useClass: FirestoreStub }],
    }).compileComponents();

    fixture = TestBed.createComponent(DistributeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
