import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticleDetailComponent } from './my-article-detail.component';

describe('MyArticleDetailComponent', () => {
  let component: MyArticleDetailComponent;
  let fixture: ComponentFixture<MyArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyArticleDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
