'use client'

import { Hint } from '@/components/hint'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface ToolButtonProps {
  label: string
  icon: LucideIcon
  onClick: () => void
  isActive?: boolean
  isDisabled?: boolean
}

export const ToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="bottom" sideOffset={10}>
      <Button
        variant={isActive ? 'boardActive' : 'board'}
        onClick={onClick}
        disabled={isDisabled}
        size={'icon'}
      >
        <Icon />
      </Button>
    </Hint>
  )
}
