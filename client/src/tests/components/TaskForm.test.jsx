import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../../components/TaskForm';

test('calls onSubmit when the form is submitted', () => {
  const handleSubmit = jest.fn();
  render(<TaskForm onSubmit={handleSubmit} />);
  
  fireEvent.change(screen.getByPlaceholderText(/New task/i), { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText(/add task/i));
  
  expect(handleSubmit).toHaveBeenCalled();
});