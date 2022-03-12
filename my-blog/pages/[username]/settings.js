import { useRouter } from "next/router"
//라우터 값 가져오기
export default function UsernameSettings(){
  const router = useRouter();

  const {username} = route.query;
  return (
    <div>
      <h1>{username}/Settings</h1>
    </div>
  )
}