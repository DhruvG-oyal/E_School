import create from 'zustand';

const useStore = create((set) => ({
  comments: [],
  setComments: (comments) => set({ comments }),
  messages:[],
  setMessages:(messages)=>set({messages}),
}));

export default useStore;
