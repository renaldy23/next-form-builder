"use client"
import { OptionContext } from "@/provider/options";
import { Select, SelectItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { useContext, useState } from "react";

export const Sidebar = () => {

    const { setOptions, options } = useContext(OptionContext)
    
    const handleInput = (e) => {
        const {name,type} = e.target
        let value = e.target.value
        if(type=="checkbox"){
            value = !options[e.target.name]
        }
        setOptions({
            key: name,
            value: value,
        })
        
    }

    return (
        <div className="h-screen bg-white w-72 shadow-md fixed right-0 flex flex-col justify-center px-4 space-y-4">
            <div className="space-y-2">
                <label>Type</label>
                <Select name="selected_type" label="Select question type" onChange={handleInput}>
                    {options.available_types.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                            {type.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className="space-y-2 flex items-center justify-between">
                <label>Required</label>
                <Switch name="is_required" value={options.is_required} size="sm" aria-label="Automatic updates" onChange={handleInput}/>
            </div>
            <div className="space-y-2 flex items-center justify-between">
                <label>Image</label>
                <Switch name="is_image" value={options.is_required} size="sm" aria-label="Automatic updates" onChange={handleInput}/>
            </div>
        </div>
    )
}