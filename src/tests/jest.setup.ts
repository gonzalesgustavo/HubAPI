import logger from "../Core/Utils/Winston";

logger.transports.forEach((t) => (t.silent = true));