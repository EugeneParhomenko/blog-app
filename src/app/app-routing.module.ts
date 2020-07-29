import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {path: 'articles', component: ArticleListComponent},
    {path: 'about', component: AboutComponent},
    {path: '', component: ArticleListComponent},
    {path: 'articles/:key', component: ArticleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}