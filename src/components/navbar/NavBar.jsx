import { h, Component } from 'preact';
import { RiGithubLine } from '@remixicon/react';
import { route } from 'preact-router';
import tippy from 'tippy.js';
import { UserStore } from '../../store';
import { useEffect, useRef, useState } from 'preact/hooks';



const NavBar = () => {
    const PROJECT_REPO = import.meta.env.VITE_PROJECT_REPO;
    const { userLogd, userName } = UserStore();
    const [userDp, setUserDp] = useState(false);
    const [userDpText, setUserDpText] = useState('G');
    const dpref = useRef(null);

    useEffect(() => {
        if (userLogd) {
            setUserDp(true);
            setUserDpText(userName[0]);
            tippy(dpref.current, {
                content: `Hello! ${userName}`
            })
        } else {
            setUserDp(false);
            setUserDpText("");
        }
    }, [userLogd])

    useEffect(() => {

        tippy(dpref.current, {
            content: `Hello! ${userName}`
        })
    }, [])

    return (
        <div class=" p-1 text-2xl justify-between flex items-center  ">


            <div class="flex cursor-pointer"
                onClick={e => { route('/') }}>
                <h1 class="font-black">GOAT <span class="text-(--border-color)">MARKDOWN</span></h1>
                
            </div>

            <div class="flex justify-between text-sm items-center h-full">

                <button
                    type="button"
                    class="cursor-pointer p-2 mx-2 text-(--border-color) "
                    onClick={e => {
                        window.open(PROJECT_REPO, '_blank')
                    }}
                >
                    <RiGithubLine />
                </button>


                <button
                    type="button"
                    hidden={userDp}
                    class="cursor-pointer p-2 bg-(--button-bg) rounded-sm border-solid border-2 border-(--border-color) "
                    onClick={e => {
                        route('/settings')
                    }}
                >
                    Settings
                </button>




                <button
                    type="button"
                    class="cursor-pointer  ml-1 h-10 w-10 flex justify-center items-center rounded-full bg-(--border-color)/20 text-(--border-color) border-2 border-(--border-color)/70 "
                    hidden={!userDp}
                    ref={dpref}
                    onClick={e => {
                        route('/settings')
                    }}
                >
                    <h1 class="text-2xl">{userDpText}</h1>

                </button>


            </div>
        </div>
    );
};

export default NavBar;
