import { Flex, List } from 'antd';
import { ContentWrapper } from '../Global/ContentWrapper';
import { TypographyKits } from '../Global/Typography';
import React from 'react';
import { fetchers } from '../../api/fetchers/fetchers';
import { IBlogListResponse } from '../../api/types/blog/blog';
import { config } from '../../config/global';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import { TAB_NAVIGATION } from '../../config/navigations/_menu';
import { BLOG_LIST_IMG_PLACEHOLDER } from '../../config/constants/_constants';
import { StyledImage } from './shared/lists.styled';

function Lists() {
  const [blogList, setBlogList] = React.useState<IBlogListResponse[]>();


  const handleGetBlogsList = React.useCallback(async () => {
    const randomNumbers  = generateRandomNumber();
    const response = await fetchers<IBlogListResponse[] | undefined>({
      url: config.BASE_API_URL + `/users/${randomNumbers}/posts`,
    })
    if(response?.length){
      setBlogList(response);
    }
  },[]);

  React.useEffect(() => {
    handleGetBlogsList();
  },[handleGetBlogsList]);

  const renderListItem = (item:IBlogListResponse) => {
    return (
      <List.Item
      key={item.title}
    >
      <Flex gap={24} align="flex-start">
        <StyledImage src={BLOG_LIST_IMG_PLACEHOLDER}/>
        <Flex vertical>
          <Flex justify='space-between' align='center'>
          <TypographyKits.Title size={10}>
            {item.title}
          </TypographyKits.Title>
          <TypographyKits.Text>
            {new Date().toDateString()}
          </TypographyKits.Text>
          </Flex>
          <TypographyKits.Text>
            {item.body}
          </TypographyKits.Text>
          <TypographyKits.Link href={`/blogs/${item?.id}`}>
            Read More
          </TypographyKits.Link>
        </Flex>
      </Flex>
    </List.Item>
    )
  }


  return (
    <ContentWrapper items={TAB_NAVIGATION} >
      <List
        itemLayout="vertical"
        pagination={{
          pageSize: 3,
          align: 'center'
        }}
        split={false}
        dataSource={blogList}
        renderItem={renderListItem}
      />
    </ContentWrapper>
  )
}

export default Lists
