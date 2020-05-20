import '../styles/global.css'
import { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from '../store';


function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default App