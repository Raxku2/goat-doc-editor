import { h, Component } from 'preact';

import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";
const About = () => {
    const PROJECT_REPO = import.meta.env.VITE_PROJECT_REPO
    const AUTHOR = import.meta.env.VITE_AUTHOR_GITHUB



    return (
        <div class=" h-full w-full flex flex-col items-center p-4">
            <div class=" h-full lg:w-[70%] w-full overflow-y-scroll ">
                <div class=" w-full h-80  flex flex-col justify-center items-center 
                border-b-2 border-(--border-color)/20 my-4">
                    <h1 class="lg:text-7xl text-2xl text-wrap text-center font-black">
                        The Greatest <span class="bg-linear-to-br from-(--text-color) from-0% to-(--border-color) to-30% bg-clip-text text-transparent  h-40">Markdown</span> Experience
                    </h1>
                    <p class="m-4 text-center text-xs lg:text-lg">
                        The GOAT Markdown Editor is Designed for developer who demand speed, precision, and elegent in their document workflow.
                    </p>
                </div>

                <div class="my-4 p-8 rounded-2xl bg-(--button-bg) flex flex-col justify-center items-center">
                    <h1 class="font-bold text-2xl my-4">Project Source</h1>
                    <div class=" text-center text-(--text-color)/50 font-bold w-full lg:w-[60%]">

                        <p class="text-sm">GOAT Markdown Editr is an open-source project. Check out the codebase, contributr, or fork it on Github.</p>
                    </div>
                    <div>
                        <button class="flex justify-center items-center p-4 m-4 border-3 border-(--border-color) rounded-xl cursor-pointer"
                            onClick={() => {
                                window.open(PROJECT_REPO, '_blank');
                            }}>
                            <RiGithubFill size={25} />
                            <h1 class="ml-2">GitHub Repository</h1>
                        </button>
                    </div>

                </div>

                <div class="my-4 p-0 lg:p-4 pb-30 border-b-2 border-(--border-color)/50 ">
                    <div class="flex items-center">
                        <hr class="w-14 bg-(--border-color) mr-2 border-2 border-(--border-color)" />
                        <h1 class="font-bold text-2xl my-4">The Creator</h1>
                    </div>

                    <div class="p-4 lg:p-14 bg-(--button-bg) rounded-2xl flex justify-center flex-col lg:flex-row ">

                        <div class="lg:w-[20%] lg:pr-4 content-center">
                            <div class=" rounded-full overflow-hidden p-1 border-4 border-(--border-color)">
                                <div class="rounded-full overflow-hidden ">
                                    <img src="http://github.com/raxku2.png" alt="" srcset="" />
                                </div>
                            </div>

                        </div>

                        <div class="w-[80%] px-0 lg:px-4">
                            <h1 class="text-2xl font-black py-2">Pinaka</h1>
                            <a href="http://" target="_blank" rel="noopener noreferrer" class="decoration-0 text-(--border-color) font-bold py-2">@raxku2</a>
                            <p class="py-4 text-sm">GOAT Markdown Editor was born as a pracitce project to explore the boundaries of high-performance web editors and modern UI design. It represents a commitment to clean code and user-centric architecture. </p>
                            <button class="flex pt-8 text-(--border-color) cursor-pointer"
                                onClick={() => {
                                    window.open(AUTHOR, '_blank')
                                }}
                            >
                                <p class="text-base lg:text-lg font-bold pr-2">View GitHub Profile</p>
                                <RiExternalLinkLine />

                            </button>
                        </div>

                    </div>

                </div>
                <div class="py-10 flex items-center justify-between mb-10 text-xs flex-col lg:flex-row">
                    <div>
                        <h1>
                            GOAT Markdown Editor
                        </h1>
                        <p class="text-xs text-(--text-color)/50 flex items-center py-2">
                            &copy; 2026 Built with curiosity
                        </p>

                    </div>
                    <div>
                        <button class="p-4 cursor-pointer font-bold ">
                            Privacy Policy
                        </button>
                        <button class="p-4  cursor-pointer font-bold">
                            Terms and Conditions
                        </button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;