import { HubButton } from '../types.core';

export default class SwitchBoard {
  buttons: Array<HubButton>;

  constructor(props: Array<HubButton>) {
    this.buttons = props;
  }

  async start(): Promise<void> {
    try {
      this.buttons.forEach(async (button) => {
        console.log({
          running: button.name,
          state: button.state,
        });
        if (button.state) {
          await button.control.on();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  async stop(): Promise<void> {
    try {
      this.buttons.forEach(async (button) => {
        if (!button.state && button.control.off) {
          await button.control.off();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
