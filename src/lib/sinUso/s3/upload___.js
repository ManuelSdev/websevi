
import Cors from 'nextjs-cors'
import Corsss from 'cors'
import { getPresignedS3POST } from '../../api/product';


export default function Upload() {


    const uploadPhoto = async (e) => {
        const file = e.target.files[0];

        const filename = encodeURIComponent(file.name);
        const filetype = file.type
        console.log(file)
        //const res = await fetch(`/api/uploadS3?file=${filename}`);
        const res = await getPresignedS3POST({ filename, filetype })
        console.log('RESSS', res)
        const { url, fields } = res
        console.log('fields', fields)
        const formData = new FormData();

        Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const upload = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        console.log(upload)
        if (upload.ok) {
            console.log('Uploaded successfully!');
        } else {
            console.error('Upload failed.');
        }
    };

    return (
        <>
            <p>Upload a .png or .jpg image (max 1MB).</p>
            <input
                onChange={uploadPhoto}
                type="file"
                accept="image/png, image/jpeg"
            />
        </>
    );
}