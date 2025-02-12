import { FormInstance } from "antd";
import { Store } from "antd/es/form/interface";

interface IFormValues {
    title?:string
    body?:string
}

interface IFormProps<T> {
    initialValues: Store;
    form: FormInstance<T>;
    onFinish: () => void;
    onCancel:() => void;
    onChange?:(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface IEditForm<T> {
    formProps: IFormProps<T>;
    formValues:IFormValues
}
