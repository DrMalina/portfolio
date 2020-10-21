import React from 'react';
import cx from 'classnames';
import { FieldError, useForm } from 'react-hook-form';

type ErrorMapProps = {
  error?: FieldError;
};

export function ErrorsMap({ error }: ErrorMapProps) {
  return (
    <>
      {error && error.type === 'required' && (
        <span role="alert" className="text-xs text-red-600">
          This field is required.
        </span>
      )}
      {error && error.type === 'maxLength' && (
        <span role="alert" className="text-xs text-red-600">
          This field is too long.
        </span>
      )}
      {error && error.type === 'pattern' && (
        <span role="alert" className="text-xs text-red-600">
          This filed is invalid.
        </span>
      )}
    </>
  );
}

type InputValidation = {
  required?: boolean;
  maxLength?: number;
  pattern?: RegExp;
};

type FormInputProps = {
  id: string;
  type?: 'text' | 'email';
  placeholder?: string;
  label: string;
  error?: FieldError;
  register: ReturnType<typeof useForm>['register'];
  validation: InputValidation;
  textarea?: boolean;
};

export function FormInput({
  id,
  type = 'text',
  placeholder,
  label,
  error,
  register,
  validation,
  textarea = false,
}: FormInputProps) {
  let body;
  const containerClassName = cx({ 'w-full': textarea, 'w-1/2': !textarea }, 'p-2');
  const inputClassName = cx(
    {
      'border-gray-500 focus:border-purple-500': !error,
      'border-red-500 focus:border-red-500': error,
      'h-48 block': textarea,
    },
    'w-full bg-gray-100 rounded border text-base px-4 py-2 placeholder-gray-600',
  );

  if (textarea) {
    body = (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        aria-invalid={!!error}
        ref={register(validation)}
        className={inputClassName}
      />
    );
  } else {
    body = (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        ref={register(validation)}
        className={inputClassName}
      />
    );
  }

  return (
    <div className={containerClassName}>
      <label htmlFor={id} className="text-sm">
        {label}:
      </label>
      {body}
      <ErrorsMap error={error} />
    </div>
  );
}
