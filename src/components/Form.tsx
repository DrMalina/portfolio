import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInput } from './FormInput';
import IconWarning from '../assets/warning.svg';

const REGEX_EMAIL = /^\S+@\S+\.\S+$/;
/*
^ there are much more complex regex/libraries solutions for email validation
but for portfolio's contact form this should do the job and catch common errors
 */

type FormNotificationProps = {
  status: 'resolved' | 'error';
};

function FormNotification({ status }: FormNotificationProps) {
  let body;

  if (status === 'resolved') {
    body = (
      <svg
        aria-hidden="true"
        className="fill-current w-4 h-4 text-green-500"
        viewBox="0 0 515.56 515.56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 274.23L176.55 451.1l339-338.67-48.66-48-290.34 290L48 225.9z" />
      </svg>
    );
  } else {
    body = <img className="w-4 h-4" src={IconWarning} alt="" />;
  }

  return (
    <div className="w-full flex flex-wrap items-center justify-center mb-10 font-medium text-center text-gray-700">
      {body}
      <span role="alert" className="ml-2">
        {status === 'resolved'
          ? 'Neat! Your message has been sent.'
          : 'Opps, something went wrong. Please, try again later.'}
      </span>
    </div>
  );
}

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = 'idle' | 'resolved' | 'error';

export function Form() {
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormStatus('resolved');
    reset();
  };

  return (
    <>
      {formStatus !== 'idle' && <FormNotification status={formStatus} />}
      <form className="flex flex-wrap -m-2" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          placeholder="Name"
          label="Name"
          error={errors.name}
          register={register}
          validation={{ required: true, maxLength: 70 }}
        />
        <FormInput
          id="email"
          placeholder="Email"
          label="Email"
          error={errors.email}
          register={register}
          validation={{ required: true, maxLength: 255, pattern: REGEX_EMAIL }}
        />
        <FormInput
          id="message"
          placeholder="Type your message here..."
          label="Message"
          error={errors.message}
          register={register}
          validation={{ required: true, maxLength: 500 }}
          textarea
        />
        <div className="w-full mt-8">
          <button
            type="submit"
            className="flex mx-auto text-white bg-primary-500 border-0 py-2 px-8 focus:outline-none hover:bg-primary-600 rounded text-lg"
          >
            Send message
          </button>
        </div>
      </form>
    </>
  );
}
