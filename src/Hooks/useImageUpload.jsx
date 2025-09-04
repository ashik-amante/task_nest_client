import axios from 'axios';


const imageHosting_key = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${imageHosting_key}`

const uploadImage =async (imageFile)=>{
    const {data} = await axios.post(image_hosting_Api, imageFile, {
        'content-type': 'multipart/form-data'
    })
    return {imageUrl: data.data.display_url}
}

export default uploadImage