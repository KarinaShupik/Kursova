import { useSelector } from "react-redux"

export function Profile() {
    const {currentUser} = useSelector(state => state.user)
    return (
        <div className="profile_stage">
            <h1 className="profile_title">Profile</h1>
            <form className="profile_form">
                <img src={currentUser.profilePicture} alt="Profile" className="profile_photo"/>
                <input defaultValue={currentUser.username} type="text" id="username" placeholder="Username" className="username_pf_input"/>
                <input defaultValue={currentUser.email} type="email" id="email" placeholder="Email" className="email_pf_input"/>
                <input type="password" id="password" placeholder="Password" className="password_pf_input"/>
                <button className="profile_btn">Update</button>
            </form>
        <div className="additional_btn">
            <span className="delete_btn">Delete Account</span>
            <span className="signout_btn">Sign Out</span>
        </div>
        </div>
    )
  }