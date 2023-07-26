import React, {
  JSXElementConstructor,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import { createRoot, Root } from 'react-dom/client'

import { Modal } from './Modal'

export const useModal = (ModalElement: JSXElementConstructor<any>) => {
  const container = useMemo(() => document.createElement('div'), [])
  let root: null | Root = null

  const onClose = useRef<(params?: unknown) => void>()
  let openOptions: { [key: string]: any } = {}

  const setOnCloseHandler = useCallback((handler?: any) => {
    onClose.current = handler
  }, [])

  const closeCompleteHandler = useCallback(() => {
    root?.unmount()
    document.body.removeChild(container)
    openOptions = {}
  }, [container])

  const render = (isOpen: boolean, callback?: () => void) => {
    if (isOpen && container.parentNode !== document.body) {
      const target = document.body
      target.append(container)
      root = createRoot(container)
    }

    root?.render(
      <React.StrictMode>
        <Modal
          container={container}
          header={openOptions?.header}
          open={isOpen}
          onClose={closeHandler}
          onCloseComplete={closeCompleteHandler}
        >
          <ModalElement onClose={closeHandler} {...openOptions} />
        </Modal>
      </React.StrictMode>
    )
  }

  const openHandler = useCallback((params: { [key: string]: any } = {}) => {
    openOptions = params

    render(true)
  }, [])

  const closeHandler = useCallback((params: { [key: string]: any } = {}) => {
    // if (onClose.current) {
    //   onClose.current(params)
    // }

    render(false)
  }, [])

  return {
    open: openHandler,
    close: closeHandler,
    onClose: setOnCloseHandler,
  }
}
