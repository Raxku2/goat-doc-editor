import { h, Component } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import { useAuth } from '../../hooks';
import LoadingBar from '../lodingBar/LoadingBar';
// import { } from 'preact-router'

const Auth = () => {
    const [authToken, SetAuthToken] = useState(null);
    const { verify } = useAuth();
    const [loadingbarVisibility, setLoadingbarVisibility] = useState(true);
    const [message, setMessage] = useState("Auth Token verifying...")


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('authToken')) {
            SetAuthToken(params.get('authToken'));
        } else {
            setMessage("Token Not Found");
            setLoadingbarVisibility(false);
        }
        window.history.replaceState(null, '', window.location.href);
    }, []);

    useEffect( async () => {
        if (authToken === null) {
            return
        }

        if (authToken) {
            await verify(authToken);
            setMessage("Auth Token verifyed");
            setLoadingbarVisibility(false);
        } else {
            setMessage("Auth Verifying Failed");
            setLoadingbarVisibility(false);
            route('/');
        }
    }, [authToken]);



    return (
        <div class="w-full h-full flex items-center justify-center p-[4%] ">
            <div class=" w-[90%] md:w-[80%] lg:w-[70%] h-full content-center ">
                <div class=" flex justify-center items-center">
                    <h1 class="text-2xl font-bold flex">{message}</h1>
                </div>

                <div class="py-4 h-[20%] content-center ">
                    <div
                        class=" h-4 w-full flex justify-center 
                    items-center"
                        hidden={!loadingbarVisibility}>
                        <LoadingBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;