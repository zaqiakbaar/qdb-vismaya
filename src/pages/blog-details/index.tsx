import { useState, useMemo } from "react";
import { Flex, Form, Image } from "antd";
import { IBlogListResponse } from "../../api/types/blog/blog";
import { DisplayBlogInfo } from "./shared/DisplayBlogInfo";
import { EditForm } from "./shared/EditForm";
import { BLOG_IMG_PLACEHOLDER } from "../../config/constants/_constants";
import { useBlogDetailsHandlers } from "../../hooks/blogs/useBlogDetailsHandlers";
import { Card } from "../../components/Global/Card";
import { StyledBackButtons } from "../../components/Shared/icons.styled";
import ActionWithModalDialog from "./shared/ActionWithModalDialog/ActionWithModalDialog";


function BlogDetails() {
    const { handlers, blogData, deepCloned } = useBlogDetailsHandlers();
    const [editMode, setEditMode] = useState(false);
    const [form] = Form.useForm();

    const formProps = useMemo(() => {
        return {
            initialValues:deepCloned as IBlogListResponse,
            form,
            onFinish: () => handlers.onFinishEditingBlogData(!!editMode, () => setEditMode(false)),
            onCancel: () => {
                handlers.setBlogData(deepCloned)
                setEditMode(!editMode)
            },
            onChange: handlers.onChangeBlogData,
        }
    },[deepCloned, editMode, form, handlers]);

    const formValues = useMemo(() => {
        return {
            title:blogData?.title,
            body: blogData?.body
        }
    },[blogData?.body, blogData?.title]);

    const handleOpenEditMode = () => setEditMode(true);

    return (
        <Card>
            <StyledBackButtons onClick={handlers.navigateToBlogRoots} />
            <Flex vertical gap={24} align="center">
                <ActionWithModalDialog onClickEdit={handleOpenEditMode} onConfirmDelete={handlers.onDeleteBlogData}/>
                <Image width={200} src={BLOG_IMG_PLACEHOLDER}/>
                {editMode ? <EditForm formProps={formProps} formValues={formValues}/> : <DisplayBlogInfo blogData={blogData}/>}
            </Flex>
        </Card>
    )
}

export default BlogDetails