"use client"
import { useReducer } from "react";
import { Drawer } from "./drawer";
import { Sidebar } from "./sidebar"
import { OptionContext } from "@/provider/options";

export const Home = ({data,forms}) => {

    const optionsReducer = (state,item) => {
        return {...state,[item.key] : item.value}
    }

    const [options, setOptions] = useReducer(optionsReducer,data.options)
    return (
        <OptionContext.Provider value={{options,setOptions}}>
            <main className="flex min-h-screen flex-col justify-center bg-zinc-200">
                <Sidebar />
                <div className="w-[calc(100%-18rem)]">
                    <div className="flex items-center justify-center">
                        <Drawer />
                    </div>
                </div>
            </main>
        </OptionContext.Provider>
    )
}