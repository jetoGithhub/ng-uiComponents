import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TestComponentController } from './index';

@NgModule({
	declarations:[
		TestComponentController
	],
	imports: [
		CommonModule
	],
	exports: [
		CommonModule,

		TestComponentController
	]
})

export class BcpComponents {}
