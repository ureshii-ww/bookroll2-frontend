import React from 'react';
import {Meta, Story} from '@storybook/react';
import SubmitButton, {SubmitButtonProps} from './SubmitButton';

export default {
  title: 'Components/Submit Button',
  component: SubmitButton
} as Meta;

const Template: Story<SubmitButtonProps> = args => <SubmitButton {...args}/>

export const Primary = Template.bind({});
Primary.args = {innerText: 'Biba'};