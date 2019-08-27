import { RxLogger, ERXLOGGERLEVELS, RxLoggerConsoleService } from "@malkab/rxlogger";

import { RxLoggerFileService } from "./lib/rxlogger-file-service";

import * as t from "./another-module";

console.log(`

------------------------------

`);


RxLogger.registerService("C00", new RxLoggerConsoleService());

RxLogger.registerService("C01", new RxLoggerConsoleService());

RxLogger.registerService("F00", new RxLoggerFileService("./logs", "the_log"));


RxLogger.registerChain(ERXLOGGERLEVELS.DEBUG, [ "C00", "F00" ]);


t.init();

setInterval(() => {

    RxLogger.log("The Mess", ERXLOGGERLEVELS.ERROR);

}, 1000);

setInterval(() => {

    RxLogger.log("The Message", ERXLOGGERLEVELS.DEBUG);

}, 1);

setInterval(() => {

    throw new Error("Trash!");

}, 5000);
