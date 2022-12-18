import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Register from "../../../../Pages/RegisterPage/Register";
import Login from "../../../../Pages/LoginPage/Login";
import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean,
  setIsOpen: any
}

function HeaderModal({ isOpen, setIsOpen }: Props) {
  // let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center max-sm:p-2 p-4 text-center backdrop-blur-sm">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-xl bg-white max-sm:p-3 p-6 text-left align-middle shadow-xl transition-all">
                <Link to='/personalarea'>
                  Личный кабинет
                </Link>
                <Register />
                <Login />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default HeaderModal