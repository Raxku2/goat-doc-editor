import { h, Component } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

const LoadingBar = () => {
    const loadingBar = useRef(null);
    useEffect(() => {
        gsap.to(loadingBar.current, {
            keyframes: [
                {
                    x: "-3%",
                    duration: 0.4
                },
                {
                    x: "-0%",
                    duration: 0.4
                },
                {
                    x: "110%",
                    duration: 0.4
                },
            ],
            repeat: -1
        });

    }, []);

    return (
        <div class='h-full w-full overflow-hidden rounded-4xl '>
            <div
                class='w-[130%] bg-(--border-color) h-full 
                rounded-2xl translate-x-[-132%] '
                ref={loadingBar}>
            </div>
        </div>
    );
};

export default LoadingBar;