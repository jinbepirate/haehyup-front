import { useEffect, useState } from 'react';

export default function ThemeComponent() {
  // theme 정보를 가져와서 상태로 관리
  const [themeList, setThemeList] = useState([]);

  // useEffect를 이용해서 theme 정보를 가져오는 함수
  useEffect(() => {
    // theme 정보 가져오기
    setThemeList()
    
  }, []);
  return (
    <div>
      theme components
      map 함수로 themeList를 이용해서 theme component를 렌더링
    </div>
  )
}
