import { Flex } from "antd";
import { StyledStarIcons } from "../../../../components/Shared/icons.styled";
import { StyledBlogLogoContainer } from "./blogtitle.styled";
import { TypographyKits } from "../../../../components/Global/Typography";
import { colorPalette } from "../../../../theme/_palette";

function BlogTitle() {
  return (
    <>
      <StyledBlogLogoContainer>
        <StyledStarIcons />
      </StyledBlogLogoContainer>
      <Flex vertical>
        <TypographyKits.Text fontWeight={700} size={18}>All Blog Posts</TypographyKits.Text>
        <TypographyKits.Text size={12} color={colorPalette.darkerGray}>Qatar Development Bank</TypographyKits.Text>
      </Flex>
    </>
  );
}

export default BlogTitle;
