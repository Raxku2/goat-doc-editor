import { h, Component } from 'preact';
import { RiAccountCircle2Line, RiInformationFill, RiPaletteFill, RiUserFill } from "@remixicon/react";
import { useTheme } from '../../hooks';
import { UserStore } from '../../store';
import { useState } from 'preact/hooks';
import { useEffect } from 'react';
import clsx from 'clsx'
import { route } from 'preact-router';

const Settings = () => {
    const { userName, userLogd, userSignout } = UserStore();

    const AUTH_APP_URL = import.meta.env.VITE_AUTH_APP;
    const THIS_APP_URL = import.meta.env.VITE_THIS_APP;
    const THIS_APP_NAM = import.meta.env.VITE_THIS_APP_NAME;

    const signin_url = `${AUTH_APP_URL}/login?name=${THIS_APP_NAM}&icon=${THIS_APP_URL}/favicon.svg&client=${THIS_APP_URL}&redi=${THIS_APP_URL}/auth`
    const signup_url = `${AUTH_APP_URL}/signup?name=${THIS_APP_NAM}&icon=${THIS_APP_URL}/favicon.svg&client=${THIS_APP_URL}&redi=${THIS_APP_URL}/auth`

    const { themes, theme, setTheme } = useTheme();

    const [profileSettingsVisibility, setProfileSettingsVisibility] = useState(true);
    const [appearanceSettingsVisibility, setAppearanceSettingsVisibility] = useState(false);

    const [userNameCard, setUserNameCard] = useState("User");
    useEffect(() => {
        if (userLogd) {
            setUserNameCard(userName);
        } else {
            setUserNameCard("User");
        }
    }, [userLogd]);



    return (
        <div class="flex w-full h-full flex-col md:flex-row">

            <div class=" md:w-[25%] lg:w-[16%] md:border-r border:border-(--border-color) flex md:flex-col flex-wrap items-center justify-center md:justify-normal md:p-0 ">

                <button
                    class={clsx("p-2 rounded-lg md:rounded-xl border-2 border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg) flex items-center text-sm lg:text-lg w-[46%] cursor-pointer m-1 md:w-[80%]",
                        profileSettingsVisibility ? "bg-(--button-bg) " : "bg-none")}

                    onClick={() => {
                        setProfileSettingsVisibility(true);
                        setAppearanceSettingsVisibility(false);
                    }}
                >
                    <RiUserFill size={20} />
                    <h1 class="mx-4">Profile</h1>
                </button>

                <button
                    class={clsx("p-2 rounded-lg md:rounded-xl border-2 border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg) flex items-center text-sm lg:text-lg w-[46%] cursor-pointer m-1 md:w-[80%]",
                        appearanceSettingsVisibility ? "bg-(--button-bg) " : "bg-none")}
                    onClick={() => {
                        setProfileSettingsVisibility(false);
                        setAppearanceSettingsVisibility(true);
                    }}
                >
                    <RiPaletteFill size={20} />
                    <h1 class="mx-4">Appearance</h1>
                </button>

                <button
                    class={clsx("p-2 rounded-lg md:rounded-xl border-2 border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg) flex items-center text-sm lg:text-lg w-[46%] cursor-pointer m-1 md:w-[80%]")}
                    onClick={() => {
                        route('/about');
                    }}
                >
                    <RiInformationFill size={20} />
                    <h1 class="mx-4">About</h1>
                </button>

            </div>
            <div class=" md:w-[75%] lg:w-[84%]">
                <div class="w-full h-full" hidden={!profileSettingsVisibility}>
                    <div class="px-4 md:px-8 my-8 ">
                        <h1 class="text-lg md:text-2xl font-black">Profile Settings</h1>
                    </div>

                    <div class="mx-8 my-4 overflow-hidden flex flex-col">
                        <div class="w-full bg-(--button-bg) p-6 rounded-2xl ">
                            <div class="flex flex-col md:flex-row justify-center md:justify-normal  items-center border-b-2 border-(--border-color)/40 ">
                                <div>
                                    <RiAccountCircle2Line size={140} />
                                </div>
                                <div class="p-4 content-center">
                                    <h1 class="font-bold text-2xl">{userNameCard}</h1>
                                </div>
                            </div>
                            <div class="mt-6 flex justify-between"
                                hidden={true}>
                                <div class="w-[49%]">
                                    <h1 class="text-sm font-bold">
                                        FULL NAME
                                    </h1>
                                    <input type="text" name="" id="" class="bg-(--border-color)/10 my-2 w-full rounded-lg text-lg py-2 px-4" disabled value={userName} />
                                </div>
                                <div class="w-[49%]">
                                    <h1 class="text-sm font-bold">
                                        EMAIL ADDRESS
                                    </h1>
                                    <input type="text" name="" id="" class="bg-(--border-color)/10 my-2 w-full rounded-lg text-lg py-2 px-4" disabled value={userName} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div class="px-4 md:px-8 my-8 ">
                            <h1 class="text-lg md:text-xl  font-bold">Account Actions</h1>
                        </div>

                        <div class="mx-8 my-4 overflow-hidden flex justify-center items-center md:justify-normal md:items-start">
                            <button
                                class="bg-(--button-bg) h-14 w-36 rounded-xl font-bold mr-4 cursor-pointer border-2 border-transparent hover:border-(--border-color)"
                                onClick={() => {
                                    window.location.replace(signin_url);
                                }}
                                hidden={userLogd}
                            >

                                Sign In
                            </button>
                            <button
                                class="bg-(--button-bg) h-14 w-36 rounded-xl font-bold mr-4 cursor-pointer border-2 border-transparent hover:border-(--border-color)"
                                onClick={e => {
                                    window.location.replace(signup_url);
                                }}
                                hidden={userLogd}
                            >
                                Sign Up
                            </button>
                            <button
                                class="bg-(--button-bg) h-14 w-36 rounded-xl font-bold mr-4 cursor-pointer border-2 border-transparent hover:border-(--border-color)"
                                onClick={e => {
                                    userSignout();
                                    localStorage.removeItem('userData')
                                }}
                                hidden={!userLogd}
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>


                <div class="h-full w-full" hidden={!appearanceSettingsVisibility}>
                    <div class="px-4 md:px-8 my-8 ">
                        <h1 class="text-lg md:text-2xl font-black">Appearance Settings</h1>
                    </div>

                    <div class="mx-8 my-4 flex flex-wrap">

                        <div class={clsx("bg-[#F9F8F6] h-24 w-38 md:h-40 md:w-60 mr-4 mb-4 rounded-xl border-4 overflow-hidden cursor-pointer ", theme == 'light' ? "border-(--border-color)" : "border-transparent")}
                            onClick={() => {
                                setTheme('light')
                            }}
                        >
                            <div class="w-full h-full flex flex-col p-2">
                                <div class="w-full h-[20%] py-1 rounded-2xl">
                                    <div class="rounded bg-[#EFE9E3] h-full">

                                    </div>
                                </div>
                                <div class="w-full h-[80%] flex">
                                    <div class="w-[25%] pt-1 pr-1">
                                        <div class="rounded bg-[#EFE9E3] h-full w-full"></div>
                                    </div>
                                    <div class="w-[75%] pt-1 pl-1">
                                        <div class="rounded  h-full w-full p-1 border border-[#D9CFC7]">
                                            <div class="rounded-full bg-[#b6946a] h-3 mb-1 w-[60%]"></div>
                                            <div class="rounded-full bg-[#b6946a] h-3 w-[40%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class={clsx("bg-[#222831] h-24 w-38 md:h-40 md:w-60 mr-4 mb-4 rounded-xl border-4 overflow-hidden cursor-pointer ", theme == 'dark' ? "border-(--border-color)" : "border-transparent")}
                            onClick={() => {
                                setTheme('dark')
                            }}>
                            <div class="w-full h-full flex flex-col p-2">
                                <div class="w-full h-[20%] py-1 rounded-2xl">
                                    <div class="rounded bg-[#31363F] h-full">

                                    </div>
                                </div>
                                <div class="w-full h-[80%] flex">
                                    <div class="w-[25%] pt-1 pr-1">
                                        <div class="rounded bg-[#31363F] h-full w-full"></div>
                                    </div>
                                    <div class="w-[75%] pt-1 pl-1">
                                        <div class="rounded  h-full w-full p-1 border border-[#76ABAE]">
                                            <div class="rounded-full bg-[#EEEEEE] h-3 mb-1 w-[60%]"></div>
                                            <div class="rounded-full bg-[#EEEEEE] h-3 w-[40%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class={clsx("bg-[#FFC4C4] h-24 w-38 md:h-40 md:w-60 mr-4 mb-4 rounded-xl border-4  overflow-hidden cursor-pointer ", theme == 'pink' ? "border-(--border-color)" : "border-transparent")}
                            onClick={() => {
                                setTheme('pink')
                            }}>
                            <div class="w-full h-full flex flex-col p-2">
                                <div class="w-full h-[20%] py-1 rounded-2xl">
                                    <div class="rounded bg-[#FCF5EE] h-full">

                                    </div>
                                </div>
                                <div class="w-full h-[80%] flex">
                                    <div class="w-[25%] pt-1 pr-1">
                                        <div class="rounded bg-[#FCF5EE] h-full w-full"></div>
                                    </div>
                                    <div class="w-[75%] pt-1 pl-1">
                                        <div class="rounded  h-full w-full p-1 border border-[#EE6983]">
                                            <div class="rounded-full bg-[#850E35] h-3 mb-1 w-[60%]"></div>
                                            <div class="rounded-full bg-[#850E35] h-3 w-[40%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class={clsx("bg-[#a4c496] h-24 w-38 md:h-40 md:w-60 mr-4 mb-4 rounded-xl border-4 overflow-hidden cursor-pointer ", theme == 'green' ? "border-(--border-color)" : "border-transparent")}
                            onClick={() => {
                                setTheme('green')
                            }}>
                            <div class="w-full h-full flex flex-col p-2">
                                <div class="w-full h-[20%] py-1 rounded-2xl">
                                    <div class="rounded bg-[#8ca481] h-full">

                                    </div>
                                </div>
                                <div class="w-full h-[80%] flex">
                                    <div class="w-[25%] pt-1 pr-1">
                                        <div class="rounded bg-[#8ca481] h-full w-full"></div>
                                    </div>
                                    <div class="w-[75%] pt-1 pl-1">
                                        <div class="rounded  h-full w-full p-1 border border-[#d9ead3]">
                                            <div class="rounded-full bg-[#8b5d12] h-3 mb-1 w-[60%]"></div>
                                            <div class="rounded-full bg-[#8b5d12] h-3 w-[40%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class={clsx("bg-[#1B3C53] h-24 w-38 md:h-40 md:w-60 mr-4 mb-4 rounded-xl border-4 overflow-hidden cursor-pointer", theme == 'blue' ? "border-(--border-color)" : "border-transparent")}
                            onClick={() => {
                                setTheme('blue')
                            }}>
                            <div class="w-full h-full flex flex-col p-2">
                                <div class="w-full h-[20%] py-1 rounded-2xl">
                                    <div class="rounded bg-[#234C6A] h-full">

                                    </div>
                                </div>
                                <div class="w-full h-[80%] flex">
                                    <div class="w-[25%] pt-1 pr-1">
                                        <div class="rounded bg-[#234C6A] h-full w-full"></div>
                                    </div>
                                    <div class="w-[75%] pt-1 pl-1">
                                        <div class="rounded  h-full w-full p-1 border border-[#456882]">
                                            <div class="rounded-full bg-[#D2C1B6] h-3 mb-1 w-[60%]"></div>
                                            <div class="rounded-full bg-[#D2C1B6] h-3 w-[40%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Settings;