---
to: src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.stories.tsx
sh: prettier --write src/components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>/index.stories.tsx
---
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { <%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Props } from './';

const meta = {
  title: 'components/<%= h.inflection.pluralize(level) %>/<%= h.changeCase.param(name) %>',
  component: <%= h.changeCase.param(name) %>,
} satisfies Meta<typeof <%= h.changeCase.pascal(name) %>, <%= h.changeCase.pascal(name) %>Props>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
