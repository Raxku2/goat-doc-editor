import { h, Component } from 'preact';
import { RiGithubLine } from '@remixicon/react';
import { route } from 'preact-router';


const NavBar = () => {
    const PROJECT_REPO = import.meta.env.VITE_PROJECT_REPO
    return (
        <div class=" p-1 text-2xl justify-between flex items-center  ">


            <div class="flex cursor-pointer"
                onClick={e => { route('/') }}>
                <h1>GOAT</h1>
            </div>

            <div class="flex justify-between text-sm items-center">
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
                    class="cursor-pointer p-2 bg-(--button-bg) rounded-sm border-solid border-2 border-(--border-color) "
                    onClick={e => {
                        route('/settings')
                    }}
                >
                    Profile
                </button>


            </div>
        </div>
    );
};

export default NavBar;
