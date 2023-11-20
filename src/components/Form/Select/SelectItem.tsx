'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export interface SelectProps extends Select.SelectProps {
  text: string
  value: string
}

export function SelectItem({ text, value, ...props }: SelectProps) {
  return (
    <Select.Item
      value={value}
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
