import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
      setValues({
          ...values,
          [target.name]: target.value
      });
  };

  const reset = () => {
      setValues(initialState);
  };

  return {
      values,
      reset,
      handleInputChange
  };
};
