import React from "react";
import { fetchers } from "../../api/fetchers/fetchers"
import { IUserResponse } from "../../api/types/user/user";
import { config } from "../../config/global";
import { generateRandomNumber } from "../../utils/generateRandomNumber";

/**
 * 
 * Hooks to retrieve user details
 * 
 * @returns {IUserResponse | undefined} `userDetails` and `handleGetUserInformations` func
 */
export const useGetUserDetails = () => {

    const [userDetails, setUserDetails] = React.useState<IUserResponse | undefined>();

    const handleGetUserInformations = React.useCallback(async () => {
        const randomUserId = generateRandomNumber();
        try {
            const response = await fetchers<IUserResponse,unknown>({
                url: `${config.BASE_API_URL}/users/${randomUserId}`,
            });
            if(response?.id){
                setUserDetails(response);
            };
        } catch {
            //TODO - integrate liogs
        }
    },[]); 

    React.useEffect(() => {
        handleGetUserInformations();
    },[handleGetUserInformations])

    return { handleGetUserInformations, userDetails }
}