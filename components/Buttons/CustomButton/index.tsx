"use client"

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, handleClick }: CustomButtonProps) => {
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