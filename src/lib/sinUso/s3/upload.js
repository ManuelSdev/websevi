
import Cors from 'nextjs-cors'
import Corsss from 'cors'
import { upload2 } from '../../api/product';
import client from '../../api/client';

export default function Upload() {


    const uploadPhoto = async (e) => {
        const file = e.target.files[0];

        const fileName = encodeURIComponent(file.name);
        const fileType = file.type
        console.log(file)
        //const res = await fetch(`/api/uploadS3?file=${filename}`);
        upload2({ fileName, fileType }).then(res => {
            console.log(res)
            const signedRequest = res.data.signedRequest;
            const url = res.data.url;
            setUploadState({
                ...uploadState,
                url
            });

            var options = {
                headers: {
                    "Content-Type": fileType
                }
            };
            client
                .put(signedRequest, file, options)
                .then(_ => {
                    setUploadState({ ...uploadState, success: true });
                    mutate();
                })
                .catch(_ => {
                    console.log("error 1", "We could not upload your image");
                });
        })
            .catch(error => {
                console.log("error 2", "We could not upload your image");
            });
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
    )

};


