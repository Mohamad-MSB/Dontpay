import  {useState, createContext} from 'react';


export const ContextAPI = createContext();




export function DataContext({children}) {



    const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("loggedIn"));

    const handleLogin = (booleanState, token) => {

        if(booleanState){
            setLoggedIn(true)
            window.localStorage.setItem("loggedIn","loggedIn");
            window.localStorage.setItem("token",token)
        } else {
            setLoggedIn(false)
            window.localStorage.removeItem("loggedIn");
            window.localStorage.removeItem("token");
        }
    }
    



    return (
       

        <ContextAPI.Provider value={{ loggedIn, handleLogin

        }}>

            {children}
        </ContextAPI.Provider>

    )
}





