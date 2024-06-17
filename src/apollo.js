import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: '',
    cache: new InMemoryCache()
});

export default client;  // Nota que aquí se está usando export default
