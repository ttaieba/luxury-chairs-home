import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";

import initializeAthentication from "../Firebase/Firebase.init";

// imported------------------------------------------

initializeAthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {

        if (e.target.value.length < 6) {
            setError("password should be more than 6")
        } else {
            setPassword(e.target.value)
            setError("")
        }
    }

    const handleLogin = (e) => {
        setIsLoading(true);
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {



                setUser(result.user)
                setError("")

            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
                setIsLoading(false);
            });
    }
    const handdleSubmit = (e,) => {
        setIsLoading(true)
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUser(result.user)
                saveuser(email)

            })
            .catch((error) => {

                const errorMessage = error.message;

                setError(errorMessage)
                setIsLoading(false)
            });

    }

    // ------------------Email Athentication-----------------


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                // User is signed out
                // ...
            }
            setIsLoading(false)
        });
    }, [])
    // -----------------------
    // useEffect(() => {
    //     fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user?.email])
    // -----------------

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))

    }
    const saveuser = (email) => {
        const user = { email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())


            .then(result => {
                if (result.insertedId) {
                    alert('  sucessfully register');


                }
            })



    }

    // ---------------singout end------------------------------------
    return {
        user,
        admin,
        isLoading,
        error,
        handleEmail,
        handlePassword,
        handleLogin,
        handdleSubmit,
        logout
    }

}



export default useFirebase;