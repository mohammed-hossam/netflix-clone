import React from 'react';
import Accordion from '../components/accordion';
import OptForm from '../components/opt-form';
import faqs from '../fixtures/faqs.json';
function AccordionContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqs.map((el) => {
        return (
          <Accordion.Item key={el.id}>
            <Accordion.Header>{el.header}</Accordion.Header>
            <Accordion.Body>{el.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}
      {/* <Accordion.Item /> */}
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}

export default AccordionContainer;
