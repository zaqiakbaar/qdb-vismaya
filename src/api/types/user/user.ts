export interface IUserResponse {
    id: number
    name: string;
    username: string;
    email: string;
    address: IUserAddressDetails;
    phone: string;
    website: string;
    company: IUserCompanyDetails;
}

interface IUserAddressDetails {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat:string
        lng:string
    }
}

interface IUserCompanyDetails {
    name:string;
    catchPhrase:string;
    bs:string;
}