import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../../components/TaskItem';

describe('TaskItem', () => {
  const task = { id: 1, title: 'Test Task', completed: false };
  const onDelete = jest.fn();
  const onToggle = jest.fn();

  beforeEach(() => {
    onDelete.mockClear();
    onToggle.mockClear();
  });

it('renders task title', () => {
    render(<TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
});

it('checkbox reflects completed state', () => {
    render(<TaskItem task={{ ...task, completed: true }} onDelete={onDelete} onToggle={onToggle} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
});

it('calls onToggle when checkbox is clicked', () => {
    render(<TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith(task);
});

it('calls onDelete when delete button is clicked', () => {
    render(<TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(onDelete).toHaveBeenCalledWith(task.id);
});
});