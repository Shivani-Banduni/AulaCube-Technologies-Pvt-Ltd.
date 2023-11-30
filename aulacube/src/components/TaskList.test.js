// Tasklist.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Taskcontext } from './ContextProvider';
import Tasklist from './TaskList';

// Mock the Taskcontext provider
jest.mock('./ContextProvider', () => ({
  Taskcontext: {
    Consumer: ({ children }) => children({ tasks: [], setTasks: jest.fn() }),
  },
}));

describe('Tasklist Component', () => {
  it('renders task list correctly', () => {
    const { getByText } = render(
      <Taskcontext.Consumer>
        {({ tasks }) => <Tasklist tasks={tasks} />}
      </Taskcontext.Consumer>
    );

    // Replace the test data as needed based on your requirements
    const taskName = 'Sample Task';
    getByText(taskName); // Ensure that the task name is rendered
  });

  it('checks if task status is updated on radio button change', () => {
    const { getByLabelText } = render(
      <Taskcontext.Consumer>
        {({ tasks }) => <Tasklist tasks={tasks} />}
      </Taskcontext.Consumer>
    );

    const completedRadio = getByLabelText('Completed');
    fireEvent.click(completedRadio); // Simulate clicking on the 'Completed' radio button

    // Add assertions to test if the status is updated as expected
    // For example, check if the text decoration changes to 'line-through'
    // You can use getByText, getByTestId, or other querying methods to assert changes in the DOM
  });

  // Add more test cases to cover other functionalities and edge cases
});
