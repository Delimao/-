import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/**
 * react-query : QueryClient, QueryClientProvider
 * react-query/devtools : ReactQueryDevtools
 * 
 * QueryClient 사용 위해 queryClient 선언
 * **/
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

/** 
 * QueryClientProvider, ReactQueryDevtools 후, 'App.tsx' rendering
 * **/
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* devtools */}
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
