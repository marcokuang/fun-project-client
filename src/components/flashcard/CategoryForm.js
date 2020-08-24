import React from "react";
import { Sticky, Select, Form } from "semantic-ui-react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import * as actions from "../../action";

export default function CategoryForm({ contextRef, handleSubmit }) {
  let flashcardState = useSelector((state) => state.flashcard, shallowEqual);
  const myDispatch = useDispatch();
  return (
    <div>
      <Sticky context={contextRef}>
        <Form attached="top" onSubmit={handleSubmit} size="small">
          <Form.Group widths="equal">
            <Form.Field>
              <label>Categories</label>
              <Select
                options={flashcardState.categories}
                name="categories"
                onChange={(e, arg) => {
                  console.log(arg);
                  actions.updateCategory(myDispatch)(arg.value);
                }}
                value={flashcardState.selectedCategory}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Number of Questions"
                name="number"
                onChange={(e) =>
                  actions.updateNumOfQuestions(myDispatch)(e.target.value)
                }
                value={flashcardState.number}
              />
            </Form.Field>
          </Form.Group>
          <Form.Button>Generate</Form.Button>
        </Form>
      </Sticky>
    </div>
  );
}
