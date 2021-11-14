import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

// ------------links------------

const useAuth = () => {


    return useContext(AuthContext)
}

export default useAuth