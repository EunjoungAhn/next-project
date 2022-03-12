import { useRouter } from "next/router"

export default function PostAll(){
  const routes = useRouter();
  //배열 값이 들어오기 때문에
  const {slug} = routes.query;
  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  )
}