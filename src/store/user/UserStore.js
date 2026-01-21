import { create } from 'zustand'


const UserStore = create((set) => ({
    userName: "User",
    userTheme: 'dark',
    userDp: null,
    userLogd: false,
    userId: "localuser",
    userDocument: [],

    setUserNameStore: (newUserName) => set({ userName: newUserName }),
    setUserThemmeStore: (newUserTheme) => set({ userTheme: newUserTheme }),
    setUserDpStore: (newDp) => set({ userDp: newDp }),
    userSignin: () => set({ userLogd: true }),
    userSignout: () => set({
        userLogd: false,
        userName: "User",
        userId: "localuser",
    }),
    setUserIdStore: (newUserId) => set({ userId: newUserId }),
    addUserDocument: (newDocument) => set((state) => ({
        userDocument: newDocument
    })),
    removeUserDocumentByData: (documentToRemove) => set((state) => ({
        userDocument: state.userDocument.filter(
            doc => JSON.stringify(doc) !== JSON.stringify(documentToRemove)
        )
    }))
}))

export default UserStore;