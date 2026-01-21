import { create } from 'zustand'

// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }))


const useSampleDoc = create(set => ({
  smid: "GOAT",
  smtitle: "Sample Doc",
  smdata: ``,
  setSampleDocData: (newData) => set({ data: newData }),

}))
export default useSampleDoc