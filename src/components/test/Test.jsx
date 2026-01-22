import { h, Component } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import LoadingBar from '../lodingBar/LoadingBar';

const Test = () => {
    const [loadingbarVisibility, setLoadingbarVisibility] = useState(true);



    return (
        <div class="w-full h-full flex items-center justify-center p-[4%] ">
            <div class=" w-[90%] md:w-[80%] lg:w-[70%] h-full content-center ">
                <div class=" flex justify-center items-center">
                    <h1 class="text-2xl font-bold flex">Auth Token verifying...</h1>
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

export default Test;