/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Form } from "antd";
import { Formik, FormikHelpers } from "formik";
import TextField from "@/components/fields/TextField";
import PhoneNumberField from "@/components/fields/PhoneNumberField";
import useFeedback from "@/utils/hooks/useFeedback";
import { useAddUser } from "@/utils/hooks/useUsersServices";
import {
  AddUserFormValues,
  initialValues,
  validationSchema,
} from "@/form-schemas/addUser";
import { generateSuccessMessage } from "@/utils/helpers/utilityHelpers";
import { FAILED_OPS_ERROR_MESSAGE } from "@/constants/constants";

const { Item: FormItem } = Form;

const AddUser = ({ closeModal }: any) => {
  const [form] = Form.useForm();
  const { mutate: addUser, isPending: isAddingUser } = useAddUser();
  const { notifyError, notifySuccess } = useFeedback();

  const handleFormSubmit = async (
    values: AddUserFormValues,
    { setSubmitting }: FormikHelpers<AddUserFormValues>,
  ) => {
    try {
      setSubmitting(true);
      const { email, fullName, phone } = values;

      const payload = {
        email,
        fullName,
        phone,
        performingRole: "customer",
        address: {
          streetNumber: "100",
          state: "CA",
          apartment: "17 Mile Drive, Pebble Beach, CA, USA",
        },

        status: "pending",
      };

      addUser(payload, {
        onSuccess: () => {
          notifySuccess(generateSuccessMessage("User", "create"));
          closeModal();
        },
      });
    } catch (error:any) {
      notifyError(FAILED_OPS_ERROR_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit }) => (
        <Form layout={"vertical"} form={form} onFinish={handleSubmit}>
          <TextField
            name="email"
            placeholder="Enter Email Address"
            className="!text-xs"
          />

          <TextField name="fullName" placeholder="Enter Full Name" className="!text-xs" />

          <PhoneNumberField
            name="phone"
            placeholder="Enter Phone No."
            className="!text-xs"
          />

          <FormItem className="!mb-0 !mt-4 text-center">
            <Button
              type="primary"
              className="w-full"
              size="middle"
              htmlType="submit"
              loading={isAddingUser}
            >
              Save
            </Button>
          </FormItem>
        </Form>
      )}
    </Formik>
  );
};

export default AddUser;
