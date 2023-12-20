import { getRequest, postRequest, formPostRequest } from "../../utils/server-queries.ts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tags from '../../components/Tags/Tags.js'
export default function EditProfile() {
        //profile inputs
    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [bio, setBio] = useState("");
    const [genres, setGenres] = useState([]);
    const [isFilePicked, setIsFilePicked] = useState(false);
    useEffect(() => {
        getGenres()
    },[])
    
    async function getGenres() {
        const response = await getRequest('profile/get-profile')

        setGenres(() => response.genres)
        
    }

    function removeItem() {

    }
   
    const handleSubmit = (e) => {
        console.log('hi', genres)
        console.log('submitted')
        e.preventDefault();
        console.log(image)
        const data = {name, image, bio, genres}
        const formData = new FormData()
        formData.append('file', image)
        formData.append('name', name)
        formData.append('bio', bio)
        formData.append('genres', genres)  
        console.log(formData)
        
        fetch('/profile/edit', {
            method: 'POST',
            body: formData,
        });
       
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(() => file);
        setIsFilePicked(true);
    };
  
    return (
      <div className="flex flex-col  w-[100%] mx-auto" >
        <h1 className="heading">Edit Profile</h1>
        <div className="flex items-center flex-col ml-16">
            <form  className="w-[60%] flex flex-col items-center" onSubmit={handleSubmit}>
                <input
                className="input-field"
                placeholder="Name"
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                <div>
                    <label 
                        className="
                            block mb-2 text-sm font-medium 
                            text-gray-900 dark:text-white
                        " 
                        htmlFor="file_input"
                    >Upload file</label>

                    <input
                    className="
                        block w-full text-sm 
                        text-gray-900 border 
                        border-gray-300 rounded-lg 
                        cursor-pointer
                        bg-gray-50 dark:text-gray-400 
                        focus:outline-none dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400
                    "
                    name='file'
                    type="file"
                    id="file_input"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    />
                </div>
               
                <input
                className="border-black border-2 h-20 placeholder:translate-y-20"
                placeholder="Bio"
                name='bio'
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                />

                <div>
                <h2>Pick your favourite Genres</h2>
                <Tags genres={genres} callback={setGenres} serverCall={removeItem}></Tags>
                {console.log(genres)}
                </div>
                <button className="button-green" type="submit" >Submit</button>
            </form>
        </div>
      </div>
    );
}