import { Flex } from "antd"
import Lists from "../../components/Lists/Lists";
import BlogTitle from "./shared/BlogTitle/BlogTitle";
import { BlogFilter } from "./shared/BlogFilter/BlogFilter";
import { StyledBlogHeaderContainer } from "./shared/BlogHeaderContainer/blogheadercontainer.styled";

function BlogPages() {
    return (
        <Flex vertical gap={16}>
            <StyledBlogHeaderContainer gap={2} align="center">
                <BlogTitle/>
                <BlogFilter/>
            </StyledBlogHeaderContainer>
            <Lists />
        </Flex>
    )
}

export default BlogPages