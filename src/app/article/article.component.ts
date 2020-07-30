import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../common/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from '../common/article.service';
import { Title, Meta } from '@angular/platform-browser';
import { SharedService } from '../common/shared.service'

@Component({
  selector: 'edm-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {

  article: Article = new Article();
  s1: Subscription;

  constructor(
    private route: ActivatedRoute,
    private articleservice: ArticleService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.s1 = this.route.params.subscribe((params) => {
      const key = params.key;
      this.articleservice.getArticle(key)
        .subscribe(article => {
          if (article === undefined) {
            this.router.navigateByUrl('404');
            return;
          }
          this.article = article;
          this.titleService.setTitle(this.article.title + this.sharedService.blogTitle);
          this.meta.addTags([
            {name: 'description', content: this.article.description},
            {name: 'og:title', content: this.article.title + this.sharedService.blogTitle},
            {name: 'og:type', content: 'website'},
            {name: 'og:url', content: this.sharedService.baseUrl + article.key},
            {name: 'og:image', content: this.article.imageUrl},
            {name: 'og:description', content: this.article.description},
            {name: 'og:site_name', content: this.sharedService.blogTitle}
          ]);
        });
    });
  }

  ngOnDestroy(): void {
    if(this.s1) {
      this.s1.unsubscribe();
    }
  }

}
