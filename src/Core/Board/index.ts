import Settings from '../../Config';
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
        if(Settings.logs){
          logger.info(`starting connection to ${button.name}, state is: ${button.state}`);
        }
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
          if(Settings.logs){
            logger.info(`starting connection to ${button.name}, state is: ${button.state}`);
          }
          await button.control.off();
        }
        else if (!button.state){
          if(Settings.logs){
            logger.info(`starting connection to ${button.name}, state is: ${button.state}`);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
