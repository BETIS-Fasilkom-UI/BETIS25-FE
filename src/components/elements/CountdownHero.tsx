'use client';
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import { Timer } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card';

interface CountdownHeroProps {
  date: string;
  type: 'Days' | 'Hours' | 'Minutes' | 'Seconds';
  classNameType?: string;
  classNameBlock?: string;
}

const BlockTime: React.FC<
  ComponentPropsWithoutRef<'div'> & CountdownHeroProps
> = ({ date, type, classNameType, classNameBlock }) => {
  return (
    <div className="flex flex-col items-center sm:gap-1">
      <span
        className={cn(
          'font-raleway inline-block font-semibold text-white text-[10.9px] leading-3 sm:text-xs md:text-sm lg:text-base -translate-y-5 sm:-translate-y-6 md:-translate-y-7 lg:-translate-y-9',
          classNameType
        )}
      >
        {type}
      </span>
      <div
        className={cn(
          'flex justify-center items-center h-[3.9rem] w-[3.3rem] md:h-[5.188rem] md:w-[4.563rem] lg:w-[5.813rem] lg:h-[6.8rem] bg-white dark:bg-[#00090A] border-2 border-[#F3F0FE] dark:border-[#252525] rounded-[9.5px] sm:rounded-[11.5px] md:rounded-[14.5px]',
          classNameBlock
        )}
      >
        <span
          className={cn(
            'inline-block font-cinzel font-black leading-9 text-2xl md:text-4xl lg:text-5xl text-[#481E58] hover:text-magenta-button-active dark:text-white',
            classNameType
          )}
        >
          {date}
        </span>
      </div>
    </div>
  );
};

const DotTime = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 pt-4 sm:pt-5 md:pt-7">
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-[3px] md:rounded-[5px] bg-white"></div>
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-[3px] md:rounded-[5px] bg-white"></div>
    </div>
  );
};

const CountdownHero = ({
  targetDate,
  displayDate = false,
  classNameType,
  classNameBlock,
  onComplete,
}: {
  targetDate: Date;
  displayDate?: boolean;
  classNameType?: string;
  classNameBlock?: string;
  onComplete?: () => void;
}) => {
  const defaultRemainingTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [dateTime, setDateTime] = useState({
    date: '',
    time: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const deadlineDate = targetDate.getTime();
      const now = new Date().getTime();
      const distance = deadlineDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        if (onComplete) {
          onComplete();
        }
      } else {
        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, displayDate, onComplete]);

  useEffect(() => {
    const date = targetDate.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    const time = targetDate
      .toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      })
      .replace('.', ':');

    setDateTime({
      date,
      time,
    });
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1 sm:gap-2 bg-[#481E58] mt-5 pt-0 pb-3 px-3 sm:mt-6 sm:pt-0 sm:pb-5 sm:px-4 md:mt-7 md:pt-0 md:pb-6 md:px-4 lg:mt-9 lg:pt-0 lg:pb-7 lg:px-4 xl:mt-9 xl:pt-0 xl:pb-8 xl:px-4 rounded-[24.7px] sm:rounded-[32.7px] md:rounded-[35.7px] lg:rounded-[38.7px]">
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
        <Card className="xl:w-1/2 py-1 px-3 sm:py-1 sm:px-2 md:py-1 md:px-3 lg:py-1 lg:px-4 xl:py-2 xl:px-4 h-fit flex flex-row items-center gap-1 sm:gap-2 justify-center bg-[#6D4B79E5] bg-opacity-[90%] shadow-[2.15px_2.15px_8px_rgba(254,245,255,0.35),-2.15px_-2.15px_6px_rgba(254,245,255,0.35)] md:shadow-[4px_4px_12px_rgba(254,245,255,0.35),-4px_-4px_12px_rgba(254,245,255,0.35)]">
          <CardContent className="flex flex-row gap-1 sm:gap-2 items-center">
            <Timer
              className={cn(
                'w-[0.875rem] h-[0.875rem] sm:w-[1.125rem] sm:h-[1.125rem] text-white',
                classNameType
              )}
            />
            <span
              className={cn(
                'inline-block text-xs md:text-sm lg:text-base pt-[0.125rem] sm:pt-0 text-white',
                classNameType
              )}
            >{`${dateTime.date}, ${dateTime.time}`}</span>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CountdownHero;
