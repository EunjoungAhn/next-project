import styles from '../styles/Home.module.css'
import SanityService from '../servives/SanityService';
import { Col, Row } from 'antd';
import Link from 'next/Link';
import { CodeOutlined } from '@ant-design/icons';
import Header from '../components/Header';
import BlogHeadline from '../components/BlogHeadline';
import BlogMainPost from '../components/BlogMainPost';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

export default function Home({home, posts}) {
  const mainPost = posts.find((p) => p.slug === home.mainPostUrl);
  const otherPost = posts.filter((p) => p.slug !== home.mainPostUrl);
  console.log(mainPost);
  console.log(otherPost);

  return (
    <div className={styles.container}>
      <Header/>
      <BlogHeadline/>
      <BlogMainPost {...mainPost}/>
      <BlogList posts={otherPost}/>
      <Footer/>
    </div>
  )
}

//여기서 중요한 것은 아래의 exprot 네임이 function getStaticProps
//이여야 한다. 다른 함수명이면 작동하지 않는다.
export async function getStaticProps() {
  //santiy 로부터 데이터를 가져온다.
  const sanityService = new SanityService();
  const home = await sanityService.getHome();
  const posts = await sanityService.getPosts();

  return {
    props: {
      home,
      posts,
    },
  };
}
