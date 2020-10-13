import React from 'react';
import { Form } from './Form';
import Link from './Link';
import { SectionHeading } from './SectionHeading';
import MailboxImg from '../assets/mailbox.svg';

export function Contact() {
  return (
    <section
      id="contact"
      className="text-gray-700 lg:max-w-5xl md:mt-8 mt-0 container
    mx-auto px-5 py-16 relative"
    >
      <header>
        <SectionHeading heading="Contact me" />
        <p className="mt-8 text-lg md:text-left text-center">
          Interested in working toghether?{' '}
          <span className="font-medium sm:inline block">Feel free to hit me up!</span>
        </p>
      </header>
      <div className="w-full md:mt-24 mt-10 grid md:grid-cols-2 grid-cols-none">
        <div className="w-full flex flex-col md:pr-24 pr-0">
          <p className="md:mt-0 mt-10 md:text-left text-center">
            To get in touch you can fill the contact form,{' '}
            <Link href="mailto:maciej.malinowski7@gmail.com" text="send me an email" /> or if you
            prefer -{' '}
            <Link
              href="https://www.linkedin.com/in/maciejmalinowski-77/"
              text="message me on LinkedIn."
            />
          </p>
          <img
            src={MailboxImg}
            alt=""
            className="md:w-56 w-32 md:mt-20 mt-0 mx-auto md:order-none order-first "
          />
        </div>
        <div className="w-full md:mt-0 mt-12">
          <Form />
        </div>
      </div>
    </section>
  );
}
