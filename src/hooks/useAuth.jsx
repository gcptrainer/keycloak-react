import React, {useState, useEffect, useRef} from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {

    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);

    const [token, setToken] = useState(null);

    useEffect(()=> {
        if(isRun.current) return;

        isRun.current = true;

        const client = new Keycloak({
            url:'http://localhost:8080',
            realm:'demorealm',
            clientId:'react'
        });
        client.init({onLoad: "login-required"}).then((res) => { setLogin(res); setToken(client.token);});
    }, []);
    return [isLogin, token];
}
export default useAuth;