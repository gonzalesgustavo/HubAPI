import { Module } from '../../Core/types.core';
import { HomeModule } from '../routes/Home/Home.module';

export const ROUTES: Array<Module> = [new HomeModule()];
