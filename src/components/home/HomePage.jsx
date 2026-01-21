import { RiFileAddLine, RiFileEditLine, RiFolderOpenLine } from '@remixicon/react';
import { h, Component } from 'preact';
import { route } from 'preact-router';
import { UseBackend } from '../../hooks';
import { EditorDoc } from '../../store';

const HomePage = () => {
    const { clearEditorDoc } = EditorDoc();
    return (
        <div class="w-full h-full flex flex-col justify-center items-center">
            <div class="w-[90%] md:w-[60%] lg:w-[20%]">
                <button class="p-4 rounded border-2  border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg)  flex justify-center items-center text-2xl cursor-pointer m-1 w-full"
                    onClick={() => {
                        route('/editor');
                        clearEditorDoc();
                    }}>
                    <h1 class="mx-4">Create New</h1>
                    <RiFileAddLine />
                </button>

            </div>

            <div class="w-[90%] md:w-[60%] lg:w-[20%]">
                <button class="p-4 rounded border-2 border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg)  flex justify-center items-center text-2xl cursor-pointer m-1 w-full"
                    onClick={e => { route('/open') }}
                >
                    <h1 class="mx-4">Browse File</h1>
                    <RiFileEditLine />
                </button>

            </div>

        </div>
    );
};

export default HomePage;
