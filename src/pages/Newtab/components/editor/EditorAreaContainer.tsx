import React from 'react'
import { useRecoilState } from 'recoil'
import { Container } from '@nextui-org/react'

import { activeNoteState } from '../../Store'
import { Note } from '../../types'
import Tiptap from './Tiptap'

import './EditorAreaContainer.scss'

const EditorAreaContainer = () => {
  const [activeNote, setActiveNote] = useRecoilState(activeNoteState)

  const setNoteContent = (content: string, textContent: string) => {
    if (typeof content === 'string') content = content.trim()
    if (typeof textContent === 'string') textContent = textContent.trim()

    setActiveNote({ ...activeNote, content, textContent } as Note)
  }

  return (
    <Container xs>
      <Tiptap content={`${activeNote?.content}` || ''} onUpdate={setNoteContent} />
    </Container>
  )
}

export default EditorAreaContainer