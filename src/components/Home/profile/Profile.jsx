import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { getUserById } from "~/lib/apis/user/userInfo";

export default function ProfileComponent() {
  // profile 정보를 가져와서 상태로 관리
  const [profile, setProfile] = useState({});

  // useEffect를 이용해서 profile 정보를 가져오는 함수
  useEffect(() => {
    // profile 정보 가져오기
    setProfile(getUserById(1));
    // getUserById(1).then((response) => {
    //   setProfile(response);
    // });
  }, []);
  return (
    <MDBCard >
      <MDBCardBody className="text-center">
        <div className="mt-3 mb-4">
          <MDBCardImage
            src={profile.profileImageUrl}
            className="rounded-circle"
            fluid
            style={{ width: "100px" }}
          />
        </div>
        <MDBTypography tag="h4">{profile.nickname}</MDBTypography>
        <MDBCardText className="text-muted mb-4">
          {profile.email}
        </MDBCardText>

        <div className="mb-4 pb-2">
          <MDBBtn outline floating>
            <MDBIcon fab icon="facebook" size="lg" />
          </MDBBtn>
          <MDBBtn outline floating className="mx-1">
            <MDBIcon fab icon="twitter" size="lg" />
          </MDBBtn>
          <MDBBtn outline floating>
            <MDBIcon fab icon="skype" size="lg" />
          </MDBBtn>
        </div>

        <MDBBtn href="/mypage" rounded size="lg">
          MY PAGE
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
