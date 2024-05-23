import { useState, useEffect } from "react";
import ThemeComponent from "../../components/Home/theme/Theme";
import ProfileComponent from "../../components/Home/profile/Profile";
import { Display } from "react-bootstrap-icons";

export default function HomePage() {

  return (
    <div  >
      {/* 이 두개 가로로 놓게 스타일 속성 어떻게 적용하지?? style={{display:'flex', flex-direction:'row'}} 적용하고 싶은데 안됨; */}
      <ThemeComponent />
      <ProfileComponent />
    </div>
  )
}
