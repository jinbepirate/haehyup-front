import { useEffect, useState } from "react"

export default function ProfileComponent() {
  // profile 정보를 가져와서 상태로 관리
  const [profile, setProfile] = useState({});

  // useEffect를 이용해서 profile 정보를 가져오는 함수
  useEffect(() => {
    // profile 정보 가져오기
    
  }, []);
  return (
    <div>
      Profile components
      user의 정보를 받아와서 렌더링
    </div>
  )
}
