import { TypographyKits } from "../../../../components/Global/Typography";
import { IDisplayBlogInfo } from "./displayBlogInfo.types";

function DisplayBlogInfo(props:IDisplayBlogInfo) {
    const {
        blogData
    } = props
  return (
    <>
      <TypographyKits.Title textAlign="center">
        {blogData?.title}
      </TypographyKits.Title>
      <TypographyKits.Text>{blogData?.body}</TypographyKits.Text>
    </>
  );
}

export default DisplayBlogInfo;
