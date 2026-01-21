import { create } from 'zustand'

const EditorDoc = create(set => ({
    id: "",
    title: "",
    data: "",
    setEditorDocData: (newData) => set({ data: newData }),
    setEditorDocTitle: (newTitle) => set({ title: newTitle }),
    setEditorDocId: (newId) => set({ id: newId }),
    clearEditorDoc: () => set({ data: "", title: "", id: "" }),

}))

export default EditorDoc;