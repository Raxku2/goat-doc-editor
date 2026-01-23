import { h, Component } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks'
import { EditorDoc, UserStore } from '../../store';
import {
    RiDeleteBinLine, RiEditBoxFill, RiEditBoxLine, RiEraserLine, RiEyeCloseLine, RiEyeFill,
    RiFileAddLine, RiFileCopyLine, RiLockFill, RiLockUnlockLine, RiSave2Line, RiUploadCloudLine
} from '@remixicon/react'
import { SaveDoc, UseBackend } from "../../hooks"

const DocEditor = () => {
    const { setEditorDocData, data, clearEditorDoc, setEditorDocTitle, title, id } = EditorDoc();
    const { edit_doc, create_new, delete_doc } = UseBackend();
    const { userLogd } = UserStore();
    const [markedTest, setMarkedText] = useState("");

    const textboxRef = useRef(null);
    const [isEditorLock, setEditorLock] = useState(false);
    const [editorVisibility, setEditorVisibility] = useState(false);
    const [previewVisibility, setPreviewVisibility] = useState(false);

    const [deleteBtnVisibility, setDeleteBtnVisibility] = useState(true);
    const [addNewBtnVisibility, setAddNewBtnVisibility] = useState(true);
    const [saveCloudBtnVisibility, setSaveCloudBtnVisibility] = useState(true);
    const [saveBtnVisibility, setSaveBtnVisibility] = useState(true);
    const [copyBtnVisibility, setCopyBtnVisibility] = useState(true);

    useEffect(() => {
        textboxRef.current.focus();
    }, []);


    useEffect(() => {
        setMarkedText(marked.parse(data));

        if (data) {
            setSaveBtnVisibility(true);
            setCopyBtnVisibility(true);
        }
        else {
            setSaveBtnVisibility(false);
            setCopyBtnVisibility(false);
        }

        if(userLogd && id && id !== 'GOAT'){
            setDeleteBtnVisibility(true);
            setSaveCloudBtnVisibility(true);
        }else{
            setSaveCloudBtnVisibility(false);
            setDeleteBtnVisibility(false);
        }

        if (userLogd && !id ){
            setAddNewBtnVisibility(true);
        }else{
            setAddNewBtnVisibility(false);
        }


    }, [data, userLogd, id]);



    return (
        <div class=" ">
            <div class="w-full h-[85dvh] md:h-[90dvh] p-2">

                <div class="w-full h-full rounded overflow-hidden flex flex-col-reverse md:flex-row  ">
                    <div class=" h-full max-h-full min-h-[50%] md:h-full w-full md:min-w-[50%] md:max-w-full p-1"
                        hidden={editorVisibility}>
                        <textarea
                            class="w-full h-full bg-(--button-bg)/50 rounded outline-0 p-4 resize-none"
                            name="" id=""
                            onChange={(e) => {
                                setEditorDocData(e.target.value)
                            }}
                            ref={textboxRef}
                            value={data}
                            disabled={isEditorLock}
                        ></textarea>

                    </div>
                    <div class=" h-full max-h-full min-h-[50%] md:h-full w-full md:min-w-[50%] md:max-w-full p-1"
                        hidden={previewVisibility}>
                        <div class="w-full h-full bg-(--button-bg)/50 rounded p-4 overflow-y-scroll"
                            id='preview'
                            dangerouslySetInnerHTML={{ __html: markedTest }}
                        >

                        </div>

                    </div>

                </div>

            </div>
            {/* <h1 class="bottom-0 left-0 absolute">ok</h1> */}
            <div class="bottom-0 left-0 absolute h-[10%] md:h-[5%] w-full p-1">
                <div class="w-full h-full rounded border-2 border-solid border-(--border-color) 
                flex flex-col-reverse md:flex-row items-center p-1">

                    <div class="h-full flex items-center w-full md:w-[50%] rounded justify-center md:justify-end">

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            hidden={!saveBtnVisibility}
                            onClick={() => {
                                SaveDoc(data, title)
                            }}>
                            <RiSave2Line size={"20px"} />
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            hidden={!addNewBtnVisibility}
                            onClick={() => {
                                if (id === "GOAT") {
                                    return
                                }
                                create_new();
                            }}>
                            <RiFileAddLine size={"20px"} />
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            hidden={!saveCloudBtnVisibility}
                            onClick={() => {
                                if (id === "GOAT") {
                                    return
                                }
                                edit_doc();
                            }}>
                            <RiUploadCloudLine size={"20px"} />
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            hidden={!deleteBtnVisibility}
                            onClick={() => {
                                if (id === "GOAT") {
                                    return
                                }
                                if (delete_doc(id)) {
                                    clearEditorDoc();
                                }
                            }}>
                            <RiDeleteBinLine size={"20px"} />
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            onClick={() => {
                                setEditorLock(!isEditorLock);
                            }}>
                            {isEditorLock ? <RiLockFill size={"20px"} /> : <RiLockUnlockLine size={"20px"} />
                            }
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            hidden={!copyBtnVisibility}
                            onClick={() => {
                                navigator.clipboard.writeText(data);
                            }}
                        >
                            <RiFileCopyLine size={"20px"} />
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            onClick={() => {
                                clearEditorDoc()
                            }}>
                            <RiEraserLine size={"20px"} />
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            onClick={(() => {
                                setEditorVisibility(!editorVisibility);
                            })}>
                            {editorVisibility ? <RiEditBoxLine size={"20px"} /> : <RiEditBoxFill size={"20px"} />}
                        </button>

                        <button type="button " class="flex justify-center items-center p-1 bg-(--button-bg) 
                        text-sm rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                        cursor-pointer hover:text-(--border-color)  "
                            onClick={(() => {
                                setPreviewVisibility(!previewVisibility)
                            })}>
                            {previewVisibility ? <RiEyeCloseLine size={"20px"} /> : <RiEyeFill size={"20px"} />}

                        </button>
                    </div>

                    <div class="h-full flex items-center w-full md:w-[50%] rounded  ">

                        <input
                            class="flex justify-center items-center p-1 bg-(--button-bg) text-md md:text-sm 
                            rounded border-2 border-solid border-(--bg-color) hover:border-(--border-color) 
                            cursor-pointer hover:text-(--border-color) outline-0 focus:border-(--border-color) 
                            w-full md:w-[50%] "
                            type="text" name="" id="" placeholder='untitled.md'
                            required={true}
                            onChange={e => { setEditorDocTitle(e.target.value) }}
                            value={title}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DocEditor;