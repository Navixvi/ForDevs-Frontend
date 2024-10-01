import * as Yup from "yup";

export interface FormField {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

export interface GenericFormProps {
  initialValues: Record<string, string>;
  validationSchema: Yup.ObjectSchema<any>;
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
  buttonLabel: string;
}
