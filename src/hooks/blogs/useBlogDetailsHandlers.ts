import { useCallback, useEffect, useState } from 'react'
import { IBlogListResponse } from '../../api/types/blog/blog';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchers } from '../../api/fetchers/fetchers';
import { config } from '../../config/global';

export const useBlogDetailsHandlers = () => {

    const routeParams = useParams();
    const navigate = useNavigate();

    const [blogData, setBlogData] = useState<Partial<IBlogListResponse>>();
    const [deepCloned, setDeepCloned] = useState<Partial<IBlogListResponse>>();

    const getBlogDetails = useCallback(async () => {
        const response = await fetchers<Partial<IBlogListResponse>>({
            url: `${config.BASE_API_URL}/posts/${routeParams?.id}`,
        });
        setBlogData(response);
        setDeepCloned(() => structuredClone(response))
    }, [routeParams?.id]);

    useEffect(() => {
        getBlogDetails();
    }, [getBlogDetails]);

    const onFinishEditingBlogData = useCallback(async (shouldEdit:boolean, setEditMode?: (e:boolean) => void) => {
        const response = await fetchers<IBlogListResponse>({
            url:`${config.BASE_API_URL}/posts/${routeParams?.id}`,
            method: 'PUT',
            data: blogData
        });
        if (response?.id) {
            if(shouldEdit){
                setEditMode?.(false);
            }
            setBlogData(response);
        }
    },[blogData, routeParams?.id]);


    const onChangeBlogData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBlogData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target?.value
            }
        })
    }

    const navigateToBlogRoots = () => {
        return navigate('/blogs')
    }

    const onDeleteBlogData =  async () => {
        try {
            await fetchers({
                url:`${config.BASE_API_URL}/posts/${routeParams?.id}`,
                method:'DELETE'
            });
            await navigate('/blogs')
        } catch {
            // TODO - send logs
        }
    }

    return {
        deepCloned,
        blogData,
        handlers: {
            onDeleteBlogData,
            onChangeBlogData,
            onFinishEditingBlogData,
            navigateToBlogRoots,
            getBlogDetails,
            setBlogData,
        }
    }
};
