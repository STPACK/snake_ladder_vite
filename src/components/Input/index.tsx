import React from 'react'
import cn from 'classnames'
import { InputProps } from './interface'

export default function index({ className, label, ...props }: InputProps) {
  return (
    <div className={cn(className)}>
      {Boolean(label) && (
        <div className='text-sm text-body mb-[8px]'>{label}</div>
      )}
      <input className='w-full' autoComplete='off' {...props} />
    </div>
  )
}
