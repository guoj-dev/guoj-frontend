import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink, from } from 'apollo-link'
import VueApollo from 'vue-apollo'

// const token = ''

const Middleware = new ApolloLink((operation, forward) => {
  // request时对请求进行处理
  const token = sessionStorage.getItem('access_token')
  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}` || null
    }
  });
  // console.log('Middleware', operation, forward)
  return forward(operation);

})

const Afterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    // 服务器返回数据
    // console.log('Afterware--response', response)
    return response
  })
})
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri:  process.env.VUE_APP_BASE_API, // 配置请求url 
  // headers: {                             // 配置header
  //   Authorization: `Bearer ${token}`
  // }
  credentials: 'same-origin'
  /* 这个属性的意思是在同源的情况下携带cookie,因为vue-apollo本身发送的是一个fetch请求，所以在发送请求时不会自动携带cookie，所以我们需要加上此属性 */
 
})


const cache = new InMemoryCache()       // 缓存

export const apolloClient = new ApolloClient({
  link:  from([Middleware, Afterware, errorLink, httpLink]),
  cache,
  connectToDevTools: true,
})

 
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  },
  errorHandler (error) {
    console.log('Global apollo error handler')
    console.error(error)
  }
})

export default apolloProvider
// export default new ApolloClient({
//   link: from([Middleware, Afterware, errorLink, httpLink]),
//   cache
// })
