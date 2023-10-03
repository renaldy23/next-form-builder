"use client"
import { TextAnswer } from "@/components/answer/components/text.answer";
import { OptionContext } from "@/provider/options";
import { Card, CardBody } from "@nextui-org/react";
import { useContext, useState } from "react";

export const Drawer = () => {
    const { options } = useContext(OptionContext)

    let answer = null

    if (options.selected_type == "text") {
        answer = <TextAnswer/>
    }

    return (
        <Card className="w-[1024px] h-[640px] px-8">
            <CardBody className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">

                    <div contentEditable="true" className="pb-2 empty:before:content-[attr(placeholder)] flex empty:before:pointer-events-none empty:before:block empty:before:text-gray-400 w-full text-3xl outline-none focus:border-b focus:border-blue-400" placeholder={`Type your question ${options.is_required ? "*" : ''}`}>
                    </div>

                    <div contentEditable="true" className="pb-2 empty:before:content-[attr(placeholder)] empty:before:pointer-events-none empty:before:block empty:before:text-gray-400 text-xl outline-none focus:border-b focus:border-blue-400" placeholder="Write description"></div>
                </div>
                {answer}
            </CardBody>
        </Card>
    )
}