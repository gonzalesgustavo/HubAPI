import { Module } from '../../core/types.core';
import { HomeModule } from '../routes/Home/Home.module';

export const ROUTES: Array<Module> = [new HomeModule()];
