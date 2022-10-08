import BaseLayout from '../Components/BaseLayout/BaseLayout'


function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
