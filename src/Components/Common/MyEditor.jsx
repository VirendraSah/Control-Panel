// src/Components/Common/TiptapEditor.jsx
import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

const MyEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
    ],
    content: '<p>Write something amazing...</p>',
  })

  const handleFormat = (command) => {
    editor.chain().focus()[command]().run()
  }

  return (
    <div className="border rounded-md w-full">
      <label className="font-semibold text-[16px] text-gray-700 px-2 pt-2 block">Description</label>
      <div className="flex gap-2 px-2 py-1 border-b">
        <button onClick={() => handleFormat('toggleBold')} className="font-bold">B</button>
        <button onClick={() => handleFormat('toggleItalic')} className="italic">I</button>
        <button onClick={() => handleFormat('toggleUnderline')} className="underline">U</button>
        <button onClick={() => handleFormat('toggleBulletList')}>• List</button>
        <button onClick={() => handleFormat('toggleOrderedList')}>1. List</button>
      </div>
      <EditorContent editor={editor} className="min-h-[200px] p-3" />
    </div>
  )
}

export default MyEditor

