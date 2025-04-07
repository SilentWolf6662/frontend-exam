"use client";
import React, { useState, useRef, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import type { Config } from "jodit/config";
import type { DeepPartial } from "jodit/esm/types";

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export interface JoditEditorProps {
    /** Config option from Jodit */
    config?: DeepPartial<Config>;
    /** Jodit default value */
    defaultValue?: string;
    /** Jodit placeholder */
    placeholder?: string;
    /** Callback to update the state */
    onContentChange: (content: string) => void;
}

export default function EditorJodit({
    config,
    defaultValue,
    placeholder,
    onContentChange
}: JoditEditorProps) {
    const editor = useRef(null);
    const [content, setContent] = useState(defaultValue);

    /* The most important point*/
    //  Using of useMemo while make custom configuration is strictly recomended
    const joditConfig = useMemo(() => ({ //  if you don't use it the editor will lose focus every time when you make any change to the editor, even an addition of one character
        /* Custom image uploader button configuretion to accept image and convert it to base64 format */
        uploader: {
            insertImageAsBase64URI: true,
            imagesExtensions: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'] // this line is not much important , use if you only strictly want to allow some specific image format
        },
        toolbarAdaptive: false,
        removeButtons: ['source'],
        placeholder: placeholder || 'Start typings...',
        "autofocus": true,
        "useSearch": false,
        "saveHeightInStorage": true,
        "saveModeInStorage": true,
        "disablePlugins": "ai-assistant,about,powered-by-jodit,print,speech-recognize,spellcheck",
        "buttons": "undo,redo,|,bold,italic,strikethrough,underline,subscript,superscript,|,eraser,font,paragraph,fontsize,|,ul,ol,lineHeight,indent",
        ...config
    }), [config, placeholder]);

    useEffect(() => {
        if (onContentChange && content)
            onContentChange(content)
    }, [content, onContentChange])

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={joditConfig}
            tabIndex={0} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={_ => { }}
        />
    );
};
