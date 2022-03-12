import { useRouter } from "next/router"

export default function PostAll(){
  const routes = useRouter();
  //배열 값이 들어오기 때문에
  const {all} = routes.query;
  return (
    <div>
      <h1>Post: {all.join("/")}</h1>
    </div>
  )
}