import BaseLayout from '../Components/BaseLayout/BaseLayout'
import GlobalStyles from '../styles/global.styles'

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Red+Hat+Display&display=swap');
</style>
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
