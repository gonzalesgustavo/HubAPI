import { Request } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (
    _req: any,
    _file: any,
    cb: (arg0: null, arg1: string) => void,
  ) => {
    cb(null, 'public/images/');
  },
  filename: (
    _req: any,
    file: { originalname: any },
    cb: (arg0: null, arg1: string) => void,
  ) => {
    cb(null, `${file.originalname}`);
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('file must be either a png or a jpeg'), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

export default upload;
