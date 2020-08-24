import React from "react";
import { Sticky, Select, Form } from "semantic-ui-react";

export default function CategoryForm({
  contextRef,
  handleSubmit,
  category,
  categories,
  number,
  setCategory,
  setNumber,
}) {
  return (
    <div>
      <Sticky context={contextRef}>
        <Form attached="top" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Categories</label>
            <Select
              options={categories}
              name="categories"
              onChange={(e, arg) => {
                console.log(arg);
                setCategory(arg.value);
              }}
              value={category}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Number of Questions"
              name="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </Form.Field>
          <Form.Button>Generate</Form.Button>
        </Form>
      </Sticky>
    </div>
  );
}
