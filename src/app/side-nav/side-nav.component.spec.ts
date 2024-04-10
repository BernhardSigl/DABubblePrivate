import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';
import { SideNavComponent } from './side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

class FirestoreStub {}
describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavComponent, BrowserAnimationsModule],
      providers: [{ provide: Firestore, useClass: FirestoreStub  }],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown when clicking on search icon', () => {
    spyOn(component, 'toggleDropdown');
    const compiled = fixture.nativeElement;
    const searchIcon = compiled.querySelector('.search-icon');
    searchIcon.click();
    fixture.detectChanges();
    expect(component.toggleDropdown).toHaveBeenCalled();
  });
});
