import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({children}){
    const [data, setData] = useState("");

    async function signIn({email, password}){
     try {
        const response = await api.post("/sessions", {email, password})

        const { user, token } = response.data;

        api.defaults.headers.common['Authorization']  = `Bearer ${token}`
        setData({user, token})

        localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
        localStorage.setItem("@rocketnotes:token", token);

     } catch (error) {
        if(error.response){
            alert(error.response.data.message)
        } else {
            alert("Não foi possível fazer o login")
        }
     }
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:user")
        localStorage.removeItem("@rocketnotes:token")

        setData({})
    }
    
    async function updateProfile({ user, avatarFile }){

        console.log(avatarFile)

        if(avatarFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append("avatar", avatarFile);

            const response = await api.patch("/user/avatar", fileUploadForm);
            user.avatar = response.data.avatar;

            console.log(user)
        }

        try {
            await api.put("/user/update", user)
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            setData({user, token: data.token})

            alert("perfil atualizado!")

        } catch (error){
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil!")
            }
        }

    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user")
        const token = localStorage.getItem("@rocketnotes:token")

        if(user && token){

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }

        console.log(data)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <AuthContext.Provider value={{signIn, 
        signOut, 
        updateProfile,
        user: data.user}}
        >
            {children}
        </AuthContext.Provider>
    )

}

function useAuth(){

    const context = useContext(AuthContext);

    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export {useAuth, AuthProvider}