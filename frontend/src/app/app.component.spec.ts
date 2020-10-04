import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { UpdatePwaService } from './auth/update-pwa.service';
import { ModalService } from './shared/modal.service';
import { SideMenuService } from './shared/side-menu.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ModalService,
        SwUpdate,
        MatSnackBar,
        SideMenuService,
        UpdatePwaService,
        Router,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'magiccollection'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('magiccollection');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('magiccollection app is running!');
  });
});
