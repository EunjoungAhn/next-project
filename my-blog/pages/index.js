import styles from '../styles/Home.module.css'
import SanityService from '../servives/SanityService';

export default function Home({home, posts}) {
  console.log(home);
  console.log(posts);

  return (
    <div className={styles.container}>
      <h1>Blog Home</h1>
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
