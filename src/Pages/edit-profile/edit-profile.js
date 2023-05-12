export default function EditProfile() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [genres, setGenres] = useState(["alternative", "rock", "hip-hop", "jazz"]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Submit form data to backend
    };
  
    return (
      <div className="flex flex-col w-[60%] mx-auto" >
        <h1>Edit Profile</h1>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
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