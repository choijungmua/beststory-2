import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../firebase-config"; // Ensure correct import
import useUserStore from "../../store/Auth";
import { useTranslation } from "react-i18next";

function MyInfo() {
  const { t } = useTranslation();
  const { user, setUser } = useUserStore();
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [photoFile, setPhotoFile] = useState(null); // New state for file
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleDisplayNameChange = (e) => setDisplayName(e.target.value);
  const handleFileChange = (e) => setPhotoFile(e.target.files[0]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let updatedPhotoURL = photoURL;

      if (photoFile) {
        // Create a reference to the file to be uploaded
        const storageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(storageRef, photoFile);
        updatedPhotoURL = await getDownloadURL(storageRef);
      }

      if (user) {
        await updateProfile(user, { displayName, photoURL: updatedPhotoURL });
        setUser({ ...user, displayName, photoURL: updatedPhotoURL }); // Update local state
        setSuccess(t("profile_update_success"));
        alert(t("profile_update_success")); // Alert message
      } else {
        setError(t("user_not_authenticated"));
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(t("profile_update_error"));
      alert(t("profile_update_error")); // Alert message
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="flex flex-col items-center">
          <img
            src={photoURL || "https://via.placeholder.com/150"}
            alt={t("upload_profile_picture")}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <label className="block mt-4">
            <span className="text-gray-700">{t("upload_profile_picture")}</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-700"
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">{t("username")}</span>
            <input
              type="text"
              value={displayName}
              onChange={handleDisplayNameChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150"
        >
          {t("update")}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
}

export default MyInfo;
