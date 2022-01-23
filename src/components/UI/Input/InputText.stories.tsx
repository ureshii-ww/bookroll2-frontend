import React from 'react';

import { Meta, Story } from '@storybook/react';

import InputText, { InputProps } from './InputText';

export default {
  title: 'Components/Input with Text',
  component: InputText
} as Meta;

const Template: Story<InputProps> = args => <InputText  {...args}/>

export const Primary = Template.bind({});
Primary.args = { placeholder: 'Поиск...', type: 'text' };
Primary.parameters = { pseudo: { hover: true } }

