import  {useState, createContext} from 'react';


export const ContextAPI = createContext();




export function DataContext({children}) {


    const [user, setUser] = useState(window.localStorage.getItem("username"))
    const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("loggedIn"));

    const handleLogin = (booleanState, token, id, user) => {

        if(booleanState){
            setLoggedIn(true)
            setUser(user)
            window.localStorage.setItem("loggedIn","loggedIn");
            window.localStorage.setItem("token",token)
            window.localStorage.setItem("userID", id)
            window.localStorage.setItem("username", user)
        } else {
            setLoggedIn(false)
            setUser(null)
            window.localStorage.removeItem("loggedIn");
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("userID");
            window.localStorage.removeItem("username")

        }
    }
    




    return (
       

        <ContextAPI.Provider value={{ loggedIn, handleLogin,
            user

        }}>

            {children}
        </ContextAPI.Provider>

    )
}





