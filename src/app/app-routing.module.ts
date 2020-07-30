import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path: 'articles', component: ArticleListComponent},
    {path: 'about', component: AboutComponent},
    {path: '404', component: NotFoundComponent},
    {path: '', component: ArticleListComponent},
    {path: 'articles/:key', component: ArticleComponent},
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
