import { h, Component } from 'preact';
import { RiAccountCircle2Line, RiLoginBoxFill, RiUserAddFill } from "@remixicon/react";
import { useTheme } from '../../hooks';
import { UserStore } from '../../store';

const Settings = () => {
    const { userName, userLogd, userSignout } = UserStore();

    const AUTH_APP_URL = import.meta.env.VITE_AUTH_APP;
    const THIS_APP_URL = import.meta.env.VITE_THIS_APP;
    const THIS_APP_NAM = import.meta.env.VITE_THIS_APP_NAME;

    const signin_url = `${AUTH_APP_URL}/login?name=${THIS_APP_NAM}&icon=${THIS_APP_URL}/favicon.svg&client=${THIS_APP_URL}&redi=${THIS_APP_URL}/auth`
    const signup_url = `${AUTH_APP_URL}/signup?name=${THIS_APP_NAM}&icon=${THIS_APP_URL}/favicon.svg&client=${THIS_APP_URL}&redi=${THIS_APP_URL}/auth`

    const { themes, theme, setTheme } = useTheme();


    return (
        <div class="flex justify-center  ">
            <div class="w-full md:w-[70dvw] lg:w-[60dvw] p-4 ">
                <div class="overflow-y-scroll">

                    <div class=" ">
                        <div class="flex justify-center content-center " >
                            <RiAccountCircle2Line size={'30%'} />
                        </div>
                        <div class="flex justify-center">
                            <h1 class="text-4xl font-bold">{userName}</h1>
                        </div>
                    </div>

                    <div class="flex justify-center items-center p-4">
                        <h1 class="px-2 text-xl">Theme:</h1>
                        <select name="theme" id="theme" class="rounded-sm  border-2 p-2 border-(--bg-color) hover:border-(--border-color)"
                            onChange={e => {
                                console.log(e.target.value);
                                setTheme(e.target.value.toLowerCase())

                            }}
                        >
                            <option value={theme} selected={true}>{theme.toUpperCase()}</option>
                            {themes.map(e => {
                                if (e.id.toUpperCase() != theme.toUpperCase()) {

                                    return (<option value={e.name}>{e.name.toUpperCase()} </option>)
                                }

                            })}
                        </select>
                    </div>

                    <div class="flex justify-center items-center">
                        <hr class="w-[50%] h-1 rounded bg-(--border-color) outline-0 border-0   " />
                    </div>

                    <div class="flex justify-center p-2 ">

                        <a href="http://" class="rounded-sm  border-2 p-2 border-(--bg-color) hover:border-(--border-color) text-white/20" > About </a>
                    </div>

                    <div class="flex justify-center items-center">
                        <hr class="w-[50%] h-1 rounded bg-(--border-color) outline-0 border-0   " />
                    </div>

                    <div class="flex justify-center p-2 ">

                        <a href="http://" class="rounded-sm  border-2 p-2 border-(--bg-color) hover:border-(--border-color) text-white/20" > Keyboard Shortcuts </a>
                    </div>

                    <div class="flex justify-center items-center">
                        <hr class="w-[50%] h-1 rounded bg-(--border-color) outline-0 border-0   " />
                    </div>


                    <div class="flex justify-center p-2 " hidden={userLogd}>

                        <div class="w-[90%] md:w-[60%] lg:w-[20%]">
                            <button class="p-4 rounded border-2  border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg)  flex justify-center items-center text-2xl cursor-pointer m-1 w-full"
                                onClick={() => {
                                    window.location.replace(signin_url);
                                }}>
                                <h1 class="mx-4">Signin</h1>
                                <RiLoginBoxFill />
                            </button>

                        </div>

                        <div class="w-[90%] md:w-[60%] lg:w-[20%]">
                            <button class="p-4 rounded border-2  border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg)  flex justify-center items-center text-2xl cursor-pointer m-1 w-full "
                                onClick={e => {
                                    window.location.replace(signup_url);
                                }}
                            >
                                <h1 class="mx-4">Signup</h1>
                                <RiUserAddFill />
                            </button>

                        </div>
                    </div>

                    <div class="flex justify-center p-2 " hidden={!userLogd}>
                        <div class="w-[90%] md:w-[60%] lg:w-[20%]">
                            <button class="p-4 rounded border-2  border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg)  flex justify-center items-center text-2xl cursor-pointer m-1 w-full "
                                onClick={e => {
                                    userSignout();
                                    localStorage.removeItem('userData')
                                }}
                            >
                                <h1 class="mx-4">Signoff</h1>
                                <RiUserAddFill />
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Settings;