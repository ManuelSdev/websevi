
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3'


const s3 = new aws.S3({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
});


const fileFilter = (req, file, cb) => {
  console.log('REQQQQQQQQQQQ')
  console.log('REQQQQQQQQQQQ', req)
  console.log('sssssssssssss', file)
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read",
    s3: s3,
    bucket: "bucketmoon",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname)
    },
  }),
});

export default upload;