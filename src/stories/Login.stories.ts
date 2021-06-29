import { Story, Meta } from '@storybook/angular/types-6-0';
import {LoginComponent} from '../app/login/login.component';
import {InputComponent} from '../app/input/input.component';

export default {
  title: 'MyLoginComponent',
  component: LoginComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Form1_Template: Story<LoginComponent> = (args: LoginComponent) => ({
    component: LoginComponent,
    props: args,
  });
  
export const LoginwithoutOTP = Form1_Template.bind({});
LoginwithoutOTP.args = {
    primary: true,
    label: 'Login without OTP',
  };  

const Form2_Template: Story<InputComponent> = (args: InputComponent) => ({
    component: InputComponent,
    props: args,
  });

  export const LoginwithOTP = Form2_Template.bind({});
  LoginwithOTP.args = {
      secondary: true,
      label: 'Login with OTP',
    };