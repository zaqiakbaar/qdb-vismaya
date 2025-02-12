import { IUserResponse } from "../../api/types/user/user";
import { AVATAR_IMG_PLACEHOLDER } from "../../config/constants/_constants";
import { colorPalette } from "../../theme/_palette";
import { Avatar } from "../Global/Avatar";
import { TypographyKits } from "../Global/Typography";

interface IUserInfo {
  userDetails?: IUserResponse;
}

export const UserInfo = (props: IUserInfo) => {
  const { userDetails } = props;
  return (
    <>
      {userDetails?.id && (
        <>
          <Avatar src={AVATAR_IMG_PLACEHOLDER} />
          <TypographyKits.Text
            textAlign="center"
            color={colorPalette.darkerGray}
          >
            Hello
          </TypographyKits.Text>
          <TypographyKits.Text textAlign="center">
            {userDetails?.name}
          </TypographyKits.Text>
        </>
      )}
    </>
  );
};
