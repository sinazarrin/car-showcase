"use client"

import Image from "next/image"

const CustomButton = ({ title, handleClick }: any) => {
  return (
    <button
      disabled={false}
      type={'button'}
      className={`custon-btn`}
      onClick={handleClick}
    >
      <span className="flex-1">
        {title}
      </span>
    </button>
  )
}

export default CustomButton