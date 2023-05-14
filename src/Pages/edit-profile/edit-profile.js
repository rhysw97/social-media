import { getRequest, postRequest, formPostRequest } from "../../utils/server-queries.ts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function EditProfile() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [image, setImage] = useState();
    const [bio, setBio] = useState("");
    const [genres, setGenres] = useState(["alternative", "rock", "hip-hop", "jazz"]);
    const [isFilePicked, setIsFilePicked] = useState(false);
    
   

    const handleSubmit = (e) => {
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
      <div className="flex flex-col w-[60%] mx-auto" >
        <h1>Edit Profile</h1>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Name"
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <input
            name='file'
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
            />
            <input
            placeholder="Bio"
            name='bio'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
            <div>
            <h2>Pick your favourite Genres</h2>
            {genres.map((genre) => (
                <div key={genre}>
                <label htmlFor={genre}>{genre}</label>
                <input
                    name="genres"
                    type="checkbox"
                    value={genre}
                    checked={genres.includes(genre)}
                    onChange={(e) => setGenres(e.target.checked ? [...genres, genre] : genres.filter(g => g !== genre))}
                />
                </div>
            ))}
            </div>
            <button type="submit" >Submit</button>
        </form>
      </div>
    );
}