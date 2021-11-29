import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";

export default async function (req, res) {
    console.log("REQ BODY", req.body)
    aws.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_ACCESS_SECRET,
        region: process.env.REGION,
        signatureVersion: 'v4',
    });

    const s3Bucket = process.env.BUCKET_NAME;

    const s3 = new aws.S3(); // Create a new instance of S3
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    const region = process.env.REGION

    console.log("NAME", fileName);
    console.log("TYPE", fileType);

    const s3Params = {
        Bucket: s3Bucket,
        Key: fileName,
        ContentType: fileType,
        ACL: "public-read"
    };

    try {
        s3.getSignedUrl("putObject", s3Params, async (err, data) => {
            if (err) {
                return res.json({ success: false, error: err });
            }
            const returnData = {
                signedRequest: data,
                // url: `https://${s3Bucket}.s3.amazonaws.com/${fileName}`,
                url: `https://${s3Bucket}.s3.${region}.amazonaws.com/${fileName}`
            };

            /*
            const imageUrl = await prisma.user.update({
              where: {
                email: session.user.email
              },
              data: {
                business: {
                  update: {
                    businessLogo: returnData.url
                  }
                }
              }
            });
      */
            return res.status(200).json(returnData);
        });
    } catch (err) {
        return res.status(500).json(err);
    }
}