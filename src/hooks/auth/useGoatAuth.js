import { h, Component } from 'preact';
import { UserStore } from '../../store';
import { route } from 'preact-router';
import UseBackend from '../backend/useBakApi';

const useAuth = () => {
    const API_URL = import.meta.env.VITE_DOC_API

    const { userSignin, setUserNameStore, setUserIdStore } = UserStore();
    const { saveUserToLocalStorage } = UseBackend();

    const verify = async (authToken) => {
        try {
            const response = await fetch(`${API_URL}/auth?authToken=${authToken}`);

            const data = await response.json();

            if (response.status === 201 || response.status === 302) {

                userSignin();
                setUserNameStore(data.name);
                setUserIdStore(data._id);
                saveUserToLocalStorage(data.name, data._id);
                window.history.replaceState(null, '', window.location.href);
                route("/settings");
            } else {
                window.history.replaceState(null, '', window.location.href);
                route("/");
            }


        } catch (error) {
            route("/");

        }

    }
    return {
        verify
    };
};

export default useAuth;