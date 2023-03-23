const UserProfile = (function() {
    const full_name = "";
  
    const getName = function() {
      return document.cookie;    // Or pull this from cookie/localStorage
    };
  
    const setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export default UserProfile;