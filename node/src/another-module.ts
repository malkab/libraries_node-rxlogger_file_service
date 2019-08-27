import { RxLogger, ERXLOGGERLEVELS } from "@malkab/rxlogger";


export function init() {

    RxLogger.log("TEST FROM ANOTHER MODULE", ERXLOGGERLEVELS.ERROR);

}
