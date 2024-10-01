import { GenericFormProps } from './types';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const GenericForm: React.FC<GenericFormProps> = ({ initialValues, validationSchema, fields, onSubmit, buttonLabel }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Field
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                as={Input}
              />
              <ErrorMessage name={field.name} component="div" className="text-red-500 text-sm" />
            </div>
          ))}

          <Button type="submit" disabled={isSubmitting}>
            {buttonLabel}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default GenericForm;