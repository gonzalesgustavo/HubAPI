import { Module } from '../../Core/types.core';
import { HomeModule } from '../routes/Home/Home.module';
import ManModule from '../routes/Man/man.module';

export const ROUTES: Array<Module> = [new HomeModule(), new ManModule()];
