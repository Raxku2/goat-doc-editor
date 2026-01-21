import { h, Component } from 'preact';
import { EditorDoc } from '../../store';
import { route } from 'preact-router';
import { UseBackend } from '../../hooks';

const DocumentCard = ({ documentId, DocumentTitle }) => {
    const backendApi = import.meta.env.VITE_DOC_API
    const { setEditorDocId, setEditorDocTitle, setEditorDocData } = EditorDoc();

    let url = ""

    const getDocData = async () => {
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


    return (
        <>
            <div
                class="p-4 rounded border-2 border-(--border-color) 
                md:border-(--bg-color) hover:border-(--border-color) 
                hover:bg-(--button-bg) flex justify-center items-center 
                text-2xl cursor-pointer m-2 w-[90%] md:w-[70%] lg:w-[50%]"
                onClick={async () => {
                    setEditorDocId(documentId);
                    setEditorDocTitle(DocumentTitle);
                    await getDocData();
                    route('/editor');
                }}
            >
                <h1>
                    {DocumentTitle}
                </h1>
            </div>



            <div class="flex justify-center items-center w-full">
                <hr class=" w-[90%] md:w-[70%] lg:w-[50%] h-1 rounded 
                bg-(--border-color) outline-0 border-0  m-2 " />
            </div>
        </>
    );
};

export default DocumentCard;