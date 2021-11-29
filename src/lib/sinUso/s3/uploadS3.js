//Get a pre-signed POST policy to support uploading to S3 directly from an HTML form.


import aws from 'aws-sdk';


export default async function handler(req, res) {
    // console.log('BODY REQ', req.body)


    aws.config.update({
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_ACCESS_SECRET,
        region: process.env.REGION,
        signatureVersion: 'v4',
    });

    const s3 = new aws.S3();
    const post = await s3.createPresignedPost({
        //ALC: 'public-read',
        Bucket: process.env.BUCKET_NAME,

        Fields: {
            // key: req.query.file,
            //ALC: 'public-read',

            key: req.body.filename

        },
        Expires: 60, // seconds
        Conditions: [
            ['content-length-range', 0, 1048576], // up to 1 MB

        ],

        ContentType: req.query.filetype,
    });
    //console.log(post)

    const url = await s3.getSignedUrl('getObject', {
        Bucket: process.env.BUCKET_NAME,
        Key: req.body.filename,
        Expires: 60 * 1
    })
    console.log('URL', url)
    res.status(200).json(post);
}