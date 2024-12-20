import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

let GqlMainClient = new ApolloClient({
    uri: "https://flyby-router-demo.herokuapp.com/",
    cache: new InMemoryCache(),
});

let movieQuery = GqlMainClient.query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
}).then((res) => console.log(res))

let movieMainQuery = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

export { GqlMainClient, movieQuery, movieMainQuery }