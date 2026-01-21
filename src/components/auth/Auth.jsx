import { h, Component } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import { useAuth } from '../../hooks';
// import { } from 'preact-router'

const Auth = () => {
    const [authToken, SetAuthToken] = useState(null);
    const { verify } = useAuth();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('authToken')) {
            SetAuthToken(params.get('authToken'));
        }
    }, []);

    useEffect(() => {
        console.log(authToken);
        if (authToken === null) {
            return
        }

        if (authToken) {
            console.log('ok');
            verify(authToken);
        } else {
            route('/');
        }
    }, [authToken])



    return (
        <div>
            auth
        </div>
    );
};

export default Auth;