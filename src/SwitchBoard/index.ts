import { SwitchBoardControl } from "../Core/types.core";


export const BUTTONS: Array<SwitchBoardControl> = [
  {
    name: 'middleware',
    state: true,
  },
  {
    name: 'routes',
    state: true,
  },
  {
    name: 'static',
    state: true,
  },
  {
    name: 'session',
    state: false,
  }
]