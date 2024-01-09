import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

import Button from "./button"

export default function Modal({
  isOpen,
  closeModal,
  openModal,
  children,
  toggler,
}: {
  isOpen: boolean
  closeModal: () => void
  openModal: () => void
  children: JSX.Element | JSX.Element[]
  toggler?: JSX.Element
}) {
  const Toggler = toggler ?? (
    <Button type="button" onClick={openModal}>
      Open dialog
    </Button>
  )

  return (
    <>
      {Toggler}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:max-w-lg transform overflow-hidden rounded-xl bg-white p-2 text-left align-middle shadow-xl transition-all">
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
