import { getRequest, postRequest } from "../../utils/server-queries.ts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function EditProfile() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [genres, setGenres] = useState(["alternative", "rock", "hip-hop", "jazz"]);
    
    useEffect(() => {
        if (image) {
          const formData = new FormData();
          formData.append('image', image);
          postRequest('profile/image', formData);
        }
    }, [image])

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(image)
      const data = {name, image, bio, genres}
    console.log(data)
      postRequest('profile/edit', data );
      //navigate('/post')
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
  
    return (
      <div className="flex flex-col w-[60%] mx-auto" >
        <h1>Edit Profile</h1>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <div>
          <h2>Pick your favourite Genres</h2>
          {genres.map((genre) => (
            <div key={genre}>
              <label htmlFor={genre}>{genre}</label>
              <input
                type="checkbox"
                value={genre}
                checked={genres.includes(genre)}
                onChange={(e) => setGenres(e.target.checked ? [...genres, genre] : genres.filter(g => g !== genre))}
              />
            </div>
          ))}
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    );
}