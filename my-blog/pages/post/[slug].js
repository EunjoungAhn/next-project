import SanityService from '../../servives/SanityService';

export default function PostAll({slug, post}){
  console.log(post);

  //배열 값이 들어오기 때문에
  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  )
}

//static 형식이기 때문에 변수명 index와 다르다.
export async function getStaticPaths() {
  const posts = await new SanityService().getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    // path: [{params:{slug: 'my-blog-test'}}],
    paths,
    //path에 없을때 true 면 404가 안나오게, false면 404가 나오게 처리
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  //santiy 로부터 데이터를 가져온다.
  const {slug} = params;
  const posts = await new SanityService().getPosts();

  const post = posts.find((p) => p.slug === slug);

  return {
    props:{
      slug,
      post
    },
  };
}