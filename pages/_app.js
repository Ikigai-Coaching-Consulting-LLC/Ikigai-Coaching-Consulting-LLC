import BaseLayout from '../Components/BaseLayout/BaseLayout'
import GlobalStyles from '../styles/global.styles'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <BaseLayout>
        <GlobalStyles />
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default MyApp
