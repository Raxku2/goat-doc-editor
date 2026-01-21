import { h, Component } from 'preact';
import { UserStore, useSampleDoc } from '../../store';
import { useEffect, useState } from 'preact/hooks';
import { RiFileAddLine, RiFileEditLine, RiFolderOpenLine } from '@remixicon/react';
import { route } from 'preact-router';
import DocumentCard from '../cards/DocumentCard';
import { UseBackend } from '../../hooks';

const FileOpen = () => {
    const { smtitle, smid } = useSampleDoc();
    const { userDocument, userLogd } = UserStore();
    const [docOnUserAccount, setDocOnUserAccount] = useState(true);
    const { get_user_docs } = UseBackend();

    useEffect(() => {

        if (userLogd && userDocument.length > 0) {
            setDocOnUserAccount(true);
        } else {
            setDocOnUserAccount(false);
        }
    }, [userDocument, userLogd]);

    useEffect(() => {
        if (userLogd) {
            get_user_docs();
        }
    }, []);

    useEffect(() => {
        if (userLogd) {
            get_user_docs();
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

                {documentLoader(docOnUserAccount)}

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
