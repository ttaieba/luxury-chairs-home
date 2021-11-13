import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"

// ------------------------links
//  coustoms hook
const useAuth = () => {


    return useContext(AuthContext)
}

export default useAuth