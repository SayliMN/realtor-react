import { getAuth, updateCurrentUser, updateProfile } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react"
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Profile() {
    const auth = getAuth()
    const navigate = useNavigate()
    const [ changeDetails, setChangeDetails ] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });
    const {name, email} = formData;
    function onLogOut() {
        auth.signOut();
        navigate("/");
    }
    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }
    async function onSubmit() {
        try {
            if(auth.currentUser.displayName !== name){
                // update displayName in firebase auth
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });
                // update displayName in firestore
                const docRef = doc(db, "users", auth.currentUser.uid)
                await updateDoc(docRef, {
                    name: name,
                });
            }
            toast.success("Profile details updated")
        } catch (error) {
            toast.error("Could not update profile details")
        }
    }
    return (
        <>
            <section className="mx-auto flex justify-center flex-col items-center">
                <h1 className="text-3xl text-center font-bold mt-6 ">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form>
                        <input type="text"
                        id="name"
                        value={name}
                        disabled={!changeDetails}
                        onChange={onChange}
                        className={`mb-6 w-full px-4 py-2 text-gray-500 border-gray-300 bg-white rounded transition ease-in-out ${changeDetails && "bg-violet-200 focus:bg-violet-200"}`}>
                        </input>
                        <input type="email"
                        id="email"
                        value={email}
                        disabled
                        className="mb-6 w-full px-4 py-2 text-gray-500 border-gray-300 bg-white rounded transition ease-in-out">
                        </input>
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
                            <p className="flex items-center">Do you want to change the name?
                                <span onClick={ () => {
                                    changeDetails && onSubmit();
                                    setChangeDetails((prevState) => !prevState);
                                }}
                                className="text-violet-600 hover:text-violet-800 transition duration-200 ease-in-out ml-1 cursor-pointer ">
                                    { changeDetails ? "Apply Changes" : "Edit" }
                                </span>
                            </p>
                            <p onClick={onLogOut} className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer">Sign out</p>
                        </div>
                    </form>
                    <button type="submit" className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in- hover:shadow-md active:bg-blue-800">
                        <Link to="/create-listings" className="flex justify-center items-center">
                            <FcHome className="mr-2 text-3xl bg-violet-200 rounded-full border-2 p-0.5"/>
                            Sell or rent your home 
                        </Link>
                    </button>
                </div>
            </section>
        </>
    );
}
