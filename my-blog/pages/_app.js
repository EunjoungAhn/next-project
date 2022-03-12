import 'antd/dist/antd.css';
import '../styles/globals.css'
//컴포넌트 들의 css가 여시 Myapp을 거쳐서 오기 때문에
//impoty로 @ant-design/icons 받은 두개의 css 라이브러리를
//가져와서 적용시켜 준다.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
