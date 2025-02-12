import { Form, FormInstance, Input, Button } from "antd";
import { StyledFormContainer, StyledPrimaryButton } from "./editForm.styled";
import { IEditForm } from "./editForm.types";


function EditForm<T>({ formProps, formValues }: IEditForm<T>) {
  const { form, initialValues, onFinish, onCancel, onChange } = formProps;
  const { title, body } = formValues;

  return (
    <StyledFormContainer
      layout="vertical"
      initialValues={initialValues}
      form={form as FormInstance}
      onFinish={onFinish}
    >
      <Form.Item label="Title">
        <Input name="title" placeholder="Please fill Title..." onChange={onChange} value={title} />
      </Form.Item>
      <Form.Item label="Body">
        <Input.TextArea name="body" placeholder="Please fill Body..." onChange={onChange} value={body} />
      </Form.Item>
      <Form.Item>
        <StyledPrimaryButton type="primary" htmlType="submit">
          Submit
        </StyledPrimaryButton>
        <Button danger variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </Form.Item>
    </StyledFormContainer>
  );
}

export default EditForm;
