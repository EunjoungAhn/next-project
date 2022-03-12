import { useRouter } from "next/router";

export default function Blog(){
  //[slug]라우트 주소 값 가져오기
  const router = useRoute();
  //console.log(router);

  const {slug} = router.query;

  return (
    <div>
      {/* <h1>blog/[slug]</h1> */}
      <h1>blog/{slug}</h1>
    </div>
  )
}