import logger from "../Core/Utils/Winston";
jest.spyOn(console, 'error').mockImplementation();
logger.transports.forEach((t) => (t.silent = true));

