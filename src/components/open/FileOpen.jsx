import { h, Component } from 'preact';
import { EditorDoc, UserStore, useSampleDoc } from '../../store';
import { useEffect, useState } from 'preact/hooks';
import { RiFileEditLine, RiFolderOpenLine } from '@remixicon/react';
import { route } from 'preact-router';
import { UseBackend } from '../../hooks';
import LoadingBar from '../lodingBar/LoadingBar';
import clsx from 'clsx';

const FileOpen = () => {
    const { smtitle, smid } = useSampleDoc();
    const { userDocument, userLogd } = UserStore();
    const [docOnUserAccount, setDocOnUserAccount] = useState(true);
    const { get_user_docs } = UseBackend();
    const [loadingbarVisibility, setLoadingbarVisibility] = useState(true);
    const [docVisibility, setDocVisibility] = useState(false);

    useEffect(() => {

        if (userLogd && userDocument.length > 0) {
            setLoadingbarVisibility(false)
            setDocOnUserAccount(true);
            setDocVisibility(true);
        } else {
            setLoadingbarVisibility(false)
            setDocOnUserAccount(false);
            setDocVisibility(true);
        }
    }, [userDocument, userLogd]);

    useEffect(async () => {
        if (userLogd) {
            setLoadingbarVisibility(true);
            setDocVisibility(false);
            await get_user_docs();
        }
    }, []);

    useEffect(async () => {
        if (userLogd) {
            setLoadingbarVisibility(true);
            setDocVisibility(false);
            await get_user_docs();
        }
    }, [userLogd]);


    const backendApi = import.meta.env.VITE_DOC_API
    const { setEditorDocId, setEditorDocTitle, setEditorDocData } = EditorDoc();

    let url = ""

    const getDocData = async (documentId) => {
        if (documentId == "GOAT") {
            url = '/SAMPLE.md'
            const res = await fetch(url);
            const data = await res.text();
            setEditorDocData(data);
        } else {
            url = `${backendApi}/document/doc?docid=${documentId}`
            const res = await fetch(url);
            const data = await res.json();
            setEditorDocData(data.data);
        }
    }

    const documentLoader = (isDoc) => {
        if (isDoc) {
            return (
                <>
                    {userDocument.map(e => {
                        return (<>
                            {/* <DocumentCard documentId={e._id} DocumentTitle={e.title} /> */}
                            <tr class=" text-lg font-bold hover:bg-(--button-bg)/60 w-full">
                                <td class="flex p-2 text-(--text-color) text-[10px] lg:text-base font-bold cursor-pointer border-r-(--border-color)/20 border-r-2"
                                    onClick={async () => {
                                        setEditorDocId(e._id);
                                        setEditorDocTitle(e.title);
                                        await getDocData(e._id);
                                        route('/editor');
                                    }}
                                >
                                    {e.title}
                                </td>
                                <td class="p-4 text-left w-[20%]">
                                    
                                </td>
                            </tr>
                        </>
                        )
                    })}
                </>
            )
        }
        else {
            return (
                <>
                    {/* <DocumentCard documentId={smid} DocumentTitle={smtitle} /> */}
                    <tr class=" text-lg font-bold hover:bg-(--button-bg)/60">
                        <td class="flex p-4 text-(--text-color) "
                                    onClick={async () => {
                                        setEditorDocId(smid);
                                        setEditorDocTitle(smid);
                                        await getDocData(smid);
                                        route('/editor');
                                    }}>
                            {smtitle}
                        </td>
                        <td class="p-4 text-left w-[20%]">
                            
                        </td>
                    </tr>
                </>
            )
        }
    }

    return (
        <div class="w-full h-[95%] flex md:flex-row flex-col">
            <div class=" md:w-[25%] lg:w-[16%] md:border-r border:border-(--border-color) flex md:flex-col items-center md:p-0 ">

                <button
                    class={clsx("p-2 rounded-lg md:rounded-xl border-2 border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg) flex items-center text-sm lg:text-lg w-[50%] cursor-pointer m-1 md:w-[80%] text-(--text-color)/50")}
                >
                    <RiFolderOpenLine size={20} />
                    <h1 class="mx-4">Load File</h1>
                </button>

                <button
                    class={clsx("p-2 rounded-lg md:rounded-xl border-2 border-(--border-color) md:border-(--bg-color) hover:border-(--border-color) hover:bg-(--button-bg) flex items-center text-sm lg:text-lg w-[50%] cursor-pointer m-1 md:w-[80%]")}
                    onClick={() => { route('/editor') }}
                >
                    <RiFileEditLine size={20} />
                    <h1 class="mx-4">Open Editor</h1>
                </button>

            </div>

            <div class=" md:w-[84%] ">
                <div class="px-4 md:px-8 my-8 ">
                    <h1 class="text-lg md:text-2xl font-black">My Documents</h1>
                </div>

                <div class="mx-8 my-4 min-h-4 max-h-[70vh] border-2 
                border-(--border-color) rounded-md lg:rounded-lg overflow-hidden 
                flex flex-col"
                    hidden={!docVisibility}
                >

                    {/* Header */}
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-(--button-bg)">
                                <th class="p-2 text-left text-(--text-color) text-[12px] lg:text-lg font-bold
                                w-[80%] border-r-(--border-color)/20 border-r-2">
                                    TITLE
                                </th>
                                <th class="p-2 text-left w-[20%] text-[12px] lg:text-lg">ACTIONS</th>
                            </tr>
                        </thead>
                    </table>

                    {/* Scrollable body (only when needed) */}
                    <div class="flex-1 overflow-y-auto">
                        <table class="w-full border-collapse">
                            <tbody class="w-full">
                                {documentLoader(docOnUserAccount)}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div class="mx-8 my-4 flex justify-center items-center h-[50%] w-full"  hidden={!loadingbarVisibility}>
                    <div class="h-4 w-full md:w-[80%] lg:w-[70%]">
                        <LoadingBar />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FileOpen;
