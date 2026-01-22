import { h, Component } from 'preact';
import { UserStore, useSampleDoc } from '../../store';
import { useEffect, useState } from 'preact/hooks';
import { RiFileAddLine, RiFileEditLine, RiFolderOpenLine } from '@remixicon/react';
import { route } from 'preact-router';
import DocumentCard from '../cards/DocumentCard';
import { UseBackend } from '../../hooks';
import LoadingBar from '../lodingBar/LoadingBar';

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

    useEffect( async () => {
        if (userLogd) {
            setLoadingbarVisibility(true);
            setDocVisibility(false);
            await get_user_docs();
        }
    }, []);

    useEffect( async () => {
        if (userLogd) {
            setLoadingbarVisibility(true);
            setDocVisibility(false);
            await get_user_docs();
        }
    }, [userLogd]);

    const documentLoader = (isDoc) => {
        if (isDoc) {
            return (
                <>
                    {userDocument.map(e => {
                        return (<>
                            <DocumentCard documentId={e._id} DocumentTitle={e.title} />
                        </>
                        )
                    })}
                </>
            )
        }
        else {
            return (
                <>
                    <DocumentCard documentId={smid} DocumentTitle={smtitle} />
                </>
            )
        }
    }

    return (
        <div class="w-full h-full flex justify-center ">
            <div class="w-full md:w-[80%] lg:w-[70%] flex justify-center items-center flex-col ">

                <div hidden={!docVisibility} class="w-full flex justify-center items-center flex-col ">
                    {documentLoader(docOnUserAccount)}
                </div>

                <div class="h-4 w-full md:w-[80%] lg:w-[70%]" hidden={!loadingbarVisibility}>
                    <LoadingBar />
                </div>

                <div class="w-[50%]  flex justify-between">


                    <button
                        class="p-4 rounded border-2 border-(--border-color) 
                        md:border-(--bg-color) hover:border-(--border-color) 
                        hover:bg-(--button-bg) flex justify-center items-center 
                        text-2xl cursor-pointer m-2 w-[50%] text-white/20"
                    >
                        <h1 class="mx-4">Load File</h1>
                        <RiFolderOpenLine />
                    </button>

                    <button
                        class="p-4 rounded border-2 border-(--border-color) 
                        md:border-(--bg-color) hover:border-(--border-color) 
                        hover:bg-(--button-bg) flex justify-center items-center 
                        text-2xl cursor-pointer m-2 w-[50%]"
                        onClick={() => { route('/editor') }}
                    >
                        <h1 class="mx-4">Open Editor</h1>
                        <RiFileEditLine />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileOpen;
