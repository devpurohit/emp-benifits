import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'
import router from './router'

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8500/graphql', 
    cache: new InMemoryCache()
});

createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
      },
    render() {
        return h(App)
    }
}).use(router).mount('#app')
