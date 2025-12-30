import { create } from 'zustand';
import {persist} from 'zustand/middleware'

const useMyStore = create(persist((set, get)=>({
    count: 1,
    name: 'suman',
    increment: ()=>{
        set((state)=>({
            count: state.count + 1
        }))
    },
    capitalizeName: ()=>{
      const {name} = get()
      set({
        name: name.charAt(0).toUpperCase() + name.slice(1)
        
      })
    },
    upperCase: ()=>{
        const {name} = get()
        set({
            name: name.toUpperCase()
        })
    }

}), {name: 'mystore'}))

export default useMyStore;