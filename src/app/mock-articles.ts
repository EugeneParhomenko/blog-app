import { Article } from './common/article.model';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Моя первая запись в блоге',
        content: '',
        description: 'Это моя первая запись, тестирую',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=1.00xw:0.757xh;0,0.0958xh&resize=1200:*'
    },
    {
        
        id: 2,
        title: 'Моя вторая запись в блоге',
        content: '',
        description: 'Это моя вторая запись, тестирую',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=1.00xw:0.757xh;0,0.0958xh&resize=1200:*'
    }
]