import multiparty from 'multiparty'
import { resolve } from 'styled-jsx/css'
import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import fs from 'fs'
import mime from 'mime-types'


const BucketName = process.env.LIARA_BUCKET_NAME

export default async function handle(req, res) {
    const form = new multiparty.Form()
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject;
            resolve({ fields, files })
        })
    })
    const client = new S3Client({
        region: "default",
        endpoint: process.env.LIARA_ENDPOINT,
        credentials: {
            accessKeyId: process.env.LIARA_ACCESS_KEY,
            secretAccessKey: process.env.LIARA_SECRET_KEY
        },
    })
    // console.log('enter', files.originalFilename)
    const Links = []
    for (const file of files.file) {
        const ext = file.originalFilename.split('.').pop();
        const newFileName = Date.now() + '.' + ext
        //     const buketFile = await client.send(new PutObjectCommand({
        //         Bucket: BucketName,
        //         Key: newFileName,
        //         Body: fs.readFileSync(file.path),
        //         ACL: 'public-read',
        //         ContentType: mime.lookup(file.path)
        //     }));
        //     console.log(buketFile)

       


        const params = {
            Body: fs.readFileSync(file.path),
            Bucket: process.env.LIARA_BUCKET_NAME,
            Key: newFileName,
            ACL: 'public-read',
            ContentType: mime.lookup(file.path)
        };

        // async/await
        try {
            await client.send(new PutObjectCommand(params));
        } catch (error) {
            console.log(error);
        }
        // const link = `https://${BucketName}.iran.liara.space/${newFileName}?X-Amz-Algorithm=${}&X-Amz-Credential=${}&X-Amz-Date=${}&X-Amz-Expires=${}&X-Amz-SignedHeaders=host&X-Amz-Signature=${}`;
        const link = `https://${BucketName}.storage.iran.liara.space/${newFileName}`
        Links.push(link)
    }







    return res.json({ Links })
}

export const config = {
    api: { bodyParser: false },
}




// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// require("dotenv").config();

// const filename = "2711702916804.jpg"; // change this to your filename

// const client = new S3Client({
//   region: "default",
//   endpoint: process.env.LIARA_ENDPOINT,
//   credentials: {
//     accessKeyId: process.env.LIARA_ACCESS_KEY,
//     secretAccessKey: process.env.LIARA_SECRET_KEY,
//   },
// });
// const params = {
//   Bucket: process.env.LIARA_BUCKET_NAME,
//   Key: filename,
// };

// const command = new GetObjectCommand(params);
// getSignedUrl(client, command).then((url) => console.log(url));