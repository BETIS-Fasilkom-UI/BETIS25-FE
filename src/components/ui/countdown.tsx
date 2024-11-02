'use client'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { Timer } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CountdownProps {
  date: string
  type: 'Days' | 'Hours' | 'Minutes' | 'Seconds'
  classNameType?: string
  classNameBlock?: string
}

const BlockTime: React.FC<ComponentPropsWithoutRef<'div'> & CountdownProps> = ({
  date,
  type,
  classNameType,
  classNameBlock,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className={cn(
          'font-raleway inline-block font-semibold text-white text-[0.563rem] sm:text-sm md:text-base lg:text-xl',
          classNameType
        )}
      >
        {type}
      </span>
      <div
        className={cn(
          'flex justify-center items-center h-[4.063rem] w-[3.375rem] md:h-[5.188rem] md:w-[4.563rem] lg:w-[5.813rem] lg:h-[6.938rem] bg-[#FFFFFF] dark:bg-[#00090A] border-2 border-[#F3F0FE] dark:border-[#252525] rounded-[0.5rem]',
          classNameBlock
        )}
      >
        <span
          className={cn(
            'inline-block font-cinzel font-black leading-9 text-2xl md:text-3xl lg:text-5xl text-tosca-dark-active hover:text-tosca-dark-hover dark:text-[#FFFFFF]',
            classNameType
          )}
        >
          {date}
        </span>
      </div>
    </div>
  )
}

const DotTime = () => {
  return (
    <div className="flex flex-col gap-3 sm:gap-5 pt-4 sm:pt-7">
      <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-white"></div>
      <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-white"></div>
    </div>
  )
}

const Countdown = ({
  targetDate,
  displayDate = false,
  classNameType,
  classNameBlock,
  onComplete,
}: {
  targetDate: Date
  displayDate?: boolean
  classNameType?: string
  classNameBlock?: string
  onComplete?: () => void
}) => {
  const defaultRemainingTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  const [dateTime, setDateTime] = useState({
    date: '',
    time: '',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const deadlineDate = targetDate.getTime()
      const now = new Date().getTime()
      const distance = deadlineDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        if (onComplete) {
          onComplete()
        }
      } else {
        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, displayDate, onComplete])

  useEffect(() => {
    const date = targetDate.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    const time = targetDate
      .toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      })
      .replace('.', ':')

    setDateTime({
      date,
      time,
    })
  }, [targetDate])

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-1 sm:gap-2">
        <BlockTime
          classNameBlock={classNameBlock}
          classNameType={classNameType}
          type={remainingTime.days != 0 ? 'Days' : 'Hours'}
          date={
            remainingTime.days != 0
              ? remainingTime.days.toString().padStart(2, '0')
              : remainingTime.hours.toString().padStart(2, '0')
          }
        />
        <DotTime />
        <BlockTime
          classNameBlock={classNameBlock}
          classNameType={classNameType}
          type={remainingTime.days != 0 ? 'Hours' : 'Minutes'}
          date={
            remainingTime.days != 0
              ? remainingTime.hours.toString().padStart(2, '0')
              : remainingTime.minutes.toString().padStart(2, '0')
          }
        />
        <DotTime />
        <BlockTime
          classNameBlock={classNameBlock}
          classNameType={classNameType}
          type={remainingTime.days != 0 ? 'Minutes' : 'Seconds'}
          date={
            remainingTime.days != 0
              ? remainingTime.minutes.toString().padStart(2, '0')
              : remainingTime.seconds.toString().padStart(2, '0')
          }
        />
      </div>
      {displayDate && (
        <div className="flex items-center gap-1 sm:gap-2">
          <Timer
            className={cn(
              'w-[0.875rem] h-[0.875rem] sm:w-[1.125rem] sm:h-[1.125rem] text-white',
              classNameType
            )}
          />
          <span
            className={cn(
              'inline-block text-[0.563rem] md:text-sm lg:text-base pt-[0.125rem] sm:pt-0 text-white',
              classNameType
            )}
          >{`${dateTime.date}, ${dateTime.time}`}</span>
        </div>
      )}
    </div>
  )
}

export default Countdown
