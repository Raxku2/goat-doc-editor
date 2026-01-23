import { useId } from "react";
import { EditorDoc, UserStore } from "../../store";

const UseBackend = () => {
    const backendApi = import.meta.env.VITE_DOC_API

    const { userSignin, setUserNameStore, setUserIdStore, userId, addUserDocument } = UserStore();
    const { title, data, id, setEditorDocData, setEditorDocId } = EditorDoc();

    const saveUserToLocalStorage = (userName, userId) => {
        const userData = {
            userName: userName,
            userId: userId
        };

        localStorage.setItem('userData', JSON.stringify(userData));
    };

    const getUserFromLocalStorage = () => {
        const data = localStorage.getItem('userData');
        const userInfo = data ? JSON.parse(data) : null;
        if (userInfo) {
            userSignin();
            setUserNameStore(userInfo.userName);
            setUserIdStore(userInfo.userId)

        } else {
            return
        }
    };

    const get_user_docs = async () => {
        if (userId === "localuser") {
            return
        }
        const res = await fetch(`${backendApi}/document/docs?userid=${userId}`)

        if (res.status === 302) {
            const data = await res.json();
            console.log(data);
            addUserDocument(data);
        } else {
            console.log('no doc available');
            addUserDocument([]);
        }
    };

    const edit_doc = async () => {
        const res = await fetch(`${backendApi}/document/doc`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user_id": userId,
                "title": title,
                "description": "string",
                "data": data,
                "doc_id": id
            })
        });

        if (res.status === 200) {
            console.log('edited');
        } else {
            console.log('not edited');
        }

    };

    const create_new = async () => {
        const doc_title = title ? title !== "" && title : "untitled"
        
        const res = await fetch(`${backendApi}/document/doc`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "user_id": userId,
                "title": doc_title,
                "description": "string",
                "data": data
            })
        });
        const insert_data = await res.json();

        if (res.status === 201) {
            // console.log(insert_data._id);
            setEditorDocId(insert_data._id)
            console.log('created');
        } else {
            console.log('not created');
        }

    };

    const delete_doc = async (docid) => {
        if (docid === 'GOAT') {
            return false
        }
        try {
            const res = await fetch(`${backendApi}/document/doc`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "doc_id": docid,
                    "user_id": userId
                })
            });

            if (res.status === 204) {
                console.log('deleted');
                return true;
            } else {
                console.log('not deleted');
            }
        } catch (error) {
            console.log('not deleted');
        }
    }


    return {
        getUserFromLocalStorage,
        saveUserToLocalStorage,
        get_user_docs,
        edit_doc,
        create_new,
        delete_doc
    };
};

export default UseBackend;