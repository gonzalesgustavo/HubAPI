import { HubButton } from '../types.core';
import logger from '../Utils/Winston';

export default class SwitchBoard {
  buttons: Array<HubButton>;
  constructor(props: Array<HubButton>) {
    this.buttons = props;
  }

  async start(): Promise<void> {
    try {
      this.buttons.forEach(async (button) => {
        logger.info(`starting connection to ${button.name}, state is: ${button.state}`);
        if (button.state) {
          await button.control.on();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  async stop(switches: HubButton[]): Promise<void> {
    try {
      switches.forEach(async (button) => {
        if (!button.state && button.control.off) {
          logger.info(`closing connection to ${button.name}, state is: ${button.state}`);
          await button.control.off();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
