import gql from 'graphql-tag'
import apolloClient from './graphql'

export function getArticleList(params) {
    return apolloClient.query({
        query: gql`query ($first: ID) {
            articleList(first: $first){
                id
                title
                content
                author {
                    name
                    age
                }
            }
        }`,
        variables: params
    })
}

export function createArticle(params) {
    return apolloClient.mutate({
        mutation: gql`mutation ($title: String, $content: String, $author: AddAuthor) {
            addArticle(title: $title, content: $content, author: $author){
                id
                title
                content
                author {
                    age
                    name
                }
            }
        }`,
        variables: params
    })
}
