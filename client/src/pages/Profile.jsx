import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  /*deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,*/
} from '../redux/user/userSlice';


export function Profile() {
    const dispatch = useDispatch()
    const fileRef = useRef(null)
    const [image, setImage] = useState(undefined)
    const [imagePercent, setImagePercent] = useState(0)
    const [imageError, setImageError] = useState(false)
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false)

    const {currentUser, loading, error} = useSelector(state => state.user)

    console.log(formData)

    useEffect(() => {
        if (image) {
            handleFileUpload(image)
        }
    }, [image])

    const handleFileUpload = async (image) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + image.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImagePercent(Math.round(progress));
          },
          (error) => {
            setImageError(true);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
              setFormData({ ...formData, profilePicture: downloadURL })
            );
          }
        );
      };

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value})
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          dispatch(updateUserStart());
          const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (data.success === false) {
            dispatch(updateUserFailure(data));
            return;
          }
          dispatch(updateUserSuccess(data));
          setUpdateSuccess(true);
        } catch (error) {
          dispatch(updateUserFailure(error));
        }
      }

      return (
          <div className="profile_stage">
              <h1 className="profile_title">Profile</h1>
              <form onSubmit={handleSubmit} className="profile_form">
                  <input type="file" ref={fileRef} hidden accept='image/*' onChange={(e) => setImage(e.target.files[0])}/>
                  <img src={formData.profilePicture || currentUser.profilePicture} alt="Profile" className="profile_photo" onClick={() => fileRef.current.click()}/>
                  <p className='loading_span'>
                      {imageError ? (
                          <span className='error_load_mess'>
                          Error uploading image (file size must be less than 2 MB)
                          </span>
                      ) : imagePercent > 0 && imagePercent < 100 ? (
                          <span className='percent_mes'>{`Uploading: ${imagePercent} %`}</span>
                          
                      ) : imagePercent === 100 ? (
                          <span className='success_load_mes'>Image uploaded successfully</span>
                      ) : (
                          ''
                      )}
                  </p>
                  <input defaultValue={currentUser.username} type="text" id="username" placeholder="Username" className="username_pf_input" onChange={handleChange}/>
                  <input defaultValue={currentUser.email} type="email" id="email" placeholder="Email" className="email_pf_input" onChange={handleChange}/>
                  <input type="password" id="password" placeholder="Password" className="password_pf_input" onChange={handleChange}/>
                  <button className="profile_btn">Update</button>
              </form>
          <div className="additional_btn">
              <span className="delete_btn">Delete Account</span>
              <span className="signout_btn">Sign Out</span>
          </div>
          <p className='profile_err_mes'>{error && 'Something went wrong!'}</p>
          <p className='profile_suc_mes'>
            {updateSuccess && 'User is updated successfully!'}
          </p>
        </div>
      )
  }