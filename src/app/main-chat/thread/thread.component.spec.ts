import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadComponent } from './thread.component';
import { AuthyService } from '../../firebase-services/authy.service';

describe('ThreadComponent', () => {
  let component: ThreadComponent;
  let fixture: ComponentFixture<ThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreadComponent],
      providers: [AuthyService],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
