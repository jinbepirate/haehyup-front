import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
// import { getUserById } from "~/lib/apis/user/userInfo";
import "./Profile.css";

async function getUserProfile() {
  try {
    const response = await fetch("/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("로그인을 먼저 해주세요.");
      } else if (response.status === 400) {
        throw new Error("올바르지 않은 접근입니다.");
      } else {
        throw new Error("Something went wrong");
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

export default function ProfileComponent() {
  // profile 정보를 가져와서 상태로 관리
  const [profile, setProfile] = useState({});

  // useEffect를 이용해서 profile 정보를 가져오는 함수
  useEffect(() => {
    async function fetchProfile() {
      const profileData = await getUserProfile();
      if (profileData) {
        setProfile(profileData);
      }
    }
    fetchProfile();
  }, []);
  console.log(profile);
  return (
    <MDBCard className="profile-card">
      <MDBCardBody className="text-center">
        <div className="mt-3 mb-4">
          <MDBCardImage
            src={
              profile.userImgId
                ? `/images/${profile.userImgId}.png`
                : "default-profile.png"
            }
            className="rounded-circle"
            fluid
            style={{ width: "100px" }}
          />
        </div>

        <MDBTypography tag="h4">{profile.uid || "Guest"}</MDBTypography>
        {/* <MDBCardText className="text-muted mb-4">
          {profile.email || "No email provided"}
        </MDBCardText> */}

        <MDBBtn noRipple="true" href="/mypage" rounded size="lg">
          MY PAGE
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
