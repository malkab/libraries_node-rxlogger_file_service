import { IRxLoggerService } from "@malkab/rxlogger";

import { debugTime } from "@malkab/ts-utils";

import * as path from "path";

import * as fs from "fs-extra";





export class RxLoggerFileService implements IRxLoggerService {

    /*

        Private

    */

    private _file: fs.WriteStream;

    /*

        Public

    */

    /**
     * 
     * @param path 
     * @param file 
     */

    constructor(logPath?: string, logFile?: string) {

        logPath = logPath ? logPath : ".";

        logFile = logFile ? `${debugTime()}-${logFile}.txt` : `${debugTime()}-log.txt`;

        const p = path.join(logPath, logFile);

        this._file = fs.createWriteStream(p);

    }

    public log(payload: string): void {

        this._file.write(`${payload}\n`);

    }

}