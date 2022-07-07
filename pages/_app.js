import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl='https://zuaazrtgnflo.usemoralis.com:2053/server'
    //serverUrl={process.env.NEXT_PUBLIC_SERVER}
    appId='iCPLDbP0Ttg9pWZCaTgD4egVif2IYsHjcv2fZnyn'
    //appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  ) 
}

export default MyApp
