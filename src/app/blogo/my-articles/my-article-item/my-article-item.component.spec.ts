import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticleItemComponent } from './my-article-item.component';

describe('MyArticleItemComponent', () => {
  let component: MyArticleItemComponent;
  let fixture: ComponentFixture<MyArticleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyArticleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
