
import { cn } from '@/lib/utils';
import { DynamicText } from './dynamic-element';
import React from 'react';

export enum TextVariant {
  error = 'error',
  link = 'link',
  textNormal = 'textNormal',
  cardTittle = 'cardTittle',
  textBold = 'textBold',
  textSmall = 'textSmall',
  largeBold = 'largeBold',
  heading = 'heading',
  subHeading = 'subHeading',
  textNormalSlab = 'textNormalSlab',
  bodyTitle = 'bodyTitle',
  bodyDes = 'bodyDes',
  resultText = 'resultText',
  nunitoHeadingText = 'nunitoHeadingText',
  yearText = 'yearText',
  heading2 = 'heading2',
  valueText = 'valueText',
  textNormalGray = 'textNormalGray',
  largeSemiBold = 'largeSemiBold',
  textOrage = 'textOrage',
  heading1 = 'heading1',
  selectText = 'selectText',
  inputLabel = 'inputLabel',
  subHeading1 = 'subHeading1',
  titleText = 'titleText',
  textSmall1 = 'textSmall1',
  textNormalHeading = 'textNormalHeading',
  boldH32 = 'boldH32',
  boldH26 = 'boldH26',
  boldH24 = 'boldH24',
  boldH22 = 'boldH22',
  boldH18 = 'boldH18',
  boldH20 = 'boldH20',
  boldH16 = 'boldH16',
  D62 = 'D62',
  D48 = 'D48',
  D42 = 'D42',
  D40 = 'D40',
  D36 = 'D36',
  D32 = 'D32',
  D30 = 'D30',
  D28 = 'D28',
  D26 = 'D26',
  D24 = 'D24',
  D22 = 'D22',
  D20 = 'D20',
  D16 = 'D16',
  D18 = 'D18',
  D14 = 'D14',
  D12 = 'D12',
  textExtraSmall = 'textExtraSmall',
  boldH14 = 'boldH14'
}

interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant | string;
  className?: string;
  elementType?: string;
  style?: object | undefined;
  onClick?: (e?: any) => void;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant,
  className,
  elementType,
  onClick,
  style,
  ...rest
}) => {
  return (
    <DynamicText
      className={cn(
        [
          variant === TextVariant.error && 'text-error font-normal text-[13px]',
          variant === TextVariant.link && 'cursor-pointer text-link text-center  my-1',
          variant === TextVariant.cardTittle && 'font-medium text-xl leading-6',
          variant === TextVariant.textBold && 'font-medium text-sm md:text-base leading-5',
          variant === TextVariant.textNormal && 'font-normal text-base text-center leading-5',
          variant === TextVariant.textNormalGray && 'font-normal text-base text-center leading-5',
          variant === TextVariant.textSmall && 'font-normal text-primaryText text-sm leading-4',
          variant === TextVariant.textSmall1 && 'font-normal text-secondaryText text-sm leading-4',
          variant === TextVariant.textExtraSmall &&
            'font-normal text-xs text-primaryText leading-4',
          variant === TextVariant.largeBold &&
            'font-bold text-[1.5rem] md:text-[2rem] lg:text-[2rem]',
          variant === TextVariant.textOrage &&
            'font-normal text-secondary text-left text-base leading-5',
          variant === TextVariant.largeSemiBold && 'text-primaryText font-medium text-lg',
          variant === TextVariant.heading &&
            'md:text-3xl text-xl font-bitter text-primaryText font-semibold text-center mb-4',
          variant === TextVariant.subHeading && 'text-center mb-8 font-bitter text-primaryText',
          variant === TextVariant.textNormalHeading &&
            'md:text-lg text-[14px] font-normal font-bitter mb-2',
          variant === TextVariant.bodyTitle &&
            'text-[16px] font-semibold text-center font-bitter text-primaryText',
          variant === TextVariant.bodyDes &&
            'text-[12px] pl-5 font-semibold font-lora break-words text-primaryText pr-2',
          variant === TextVariant.resultText &&
            'text-sm lg:text-[24px] font-normal font-lora first-letter:text-secondaryText',
          variant === TextVariant.nunitoHeadingText &&
            'text-sm lg:text-[24px] font-normal font-lora text-primaryText',
          variant === TextVariant.yearText && 'lg:text-[16px] text-[11px]',
          variant === TextVariant.heading2 && 'font-semibold text-primaryText text-[32px] px-5',
          variant === TextVariant.valueText &&
            'font-bitter font-medium text-[24px] text-primaryText',
          variant === TextVariant.selectText &&
            'md:text-lg text-sm font-normal font-bitter text-primaryText mb-2',
          variant === TextVariant.heading1 && 'text:lg text-left lg:text-2xl my-2',
          variant === TextVariant.inputLabel &&
            'md:text-lg text-sm font-normal font-bitter text-primaryText mb-2 pr-4',
          variant === TextVariant.selectText &&
            'md:text-lg text-sm font-normal font-bitter text-primaryText mb-2',
          variant === TextVariant.subHeading1 &&
            'text-center mb-8 text-xl font-bitter text-primaryText',
          variant === TextVariant.titleText &&
            'text-[22px] sm:text-[16px] md:text-[18px] font-semibold text-primaryText',
          variant === TextVariant.boldH14 &&
            'text-[9px] csm:text-[11px] cmd:text-[13px] clg:text-[14px] text-primaryText font-bold',
          variant === TextVariant.boldH18 &&
            'text-[12px] csm:text-[14px] cmd:text-[16px] clg:text-[18px] text-primaryText font-bold',
          variant === TextVariant.boldH20 &&
            'text-[14px] csm:text-[16px] cmd:text-[18px] clg:text-[20px] text-primaryText font-bold',
          variant === TextVariant.boldH22 &&
            'text-[16px] csm:text-[18px] cmd:text-[20px] clg:text-[22px] text-primaryText font-bold',
          variant === TextVariant.boldH32 &&
            'text-[26px] csm:text-[28px] cmd:text-[30px] clg:text-[32px] text-primaryText font-bold leading-7',
          variant === TextVariant.boldH24 &&
            'text-[18px] csm:text-[20px] cmd:text-[22px] clg:text-[24px] text-primaryText font-bold leading-7',
          variant === TextVariant.boldH26 &&
            'text-[20px] csm:text-[22px] cmd:text-[24px] clg:text-[26px] text-primaryText font-bold leading-6',
          variant === TextVariant.D12 && 'text-[8px] clg:text-[12px] text-primaryText',
          variant === TextVariant.D14 && 'text-[12px] clg:text-[14px] text-primaryText',
          variant === TextVariant.D16 &&
            'text-[10px] csm:text-[12px] cmd:text-[14px] clg:text-[16px] text-primaryText',
          variant === TextVariant.boldH16 &&
            'text-[10px] csm:text-[12px] cmd:text-[14px] clg:text-[16px] text-primaryText font-bold',
          variant === TextVariant.D18 &&
            'text-[12px] csm:text-[14px] cmd:text-[16px] clg:text-[18px] text-primaryText',
          variant === TextVariant.D20 &&
            'text-[14px] csm:text-[16px] cmd:text-[18px] clg:text-[20px] text-primaryText',
          variant === TextVariant.D22 &&
            'text-[16px] csm:text-[18px] cmd:text-[20px] clg:text-[22px] text-primaryText',
          variant === TextVariant.D24 &&
            'text-[18px] csm:text-[20px] cmd:text-[22px] clg:text-[24px] text-primaryText leading-6',
          variant === TextVariant.D26 &&
            'text-[20px] csm:text-[22px] cmd:text-[24px] clg:text-[26px] text-primaryText font-bitter',
          variant === TextVariant.D28 &&
            'text-[20px] csm:text-[24px] cmd:text-[26px] clg:text-[28px] text-primaryText leading-6',
          variant === TextVariant.D30 &&
            'text-[24px] csm:text-[26px] cmd:text-[28px] clg:text-[30px] text-primaryText font-bitter',
          variant === TextVariant.D32 &&
            'text-[26px] csm:text-[28px] cmd:text-[30px] clg:text-[32px] text-primaryText font-bitter',
          variant === TextVariant.D36 &&
            'text-[22px] csm:text-[26px] cmd:text-[28px] clg:text-[36px] text-primaryText font-bitter',
          variant === TextVariant.D40 &&
            'text-[24px] csm:text-[28px] cmd:text-[32px] clg:text-[40px] text-primaryText font-bitter',
          variant === TextVariant.D42 &&
            'text-[26px] csm:text-[30px] cmd:text-[34px] clg:text-[42px] text-primaryText font-bitter',
          variant === TextVariant.D48 &&
            'text-[28px] csm:text-[32px] cmd:text-[36px] clg:text-[48px] text-primaryText font-bitter',
          variant === TextVariant.D62 &&
            'text-[32px] csm:text-[40px] cmd:text-[56px] lg:text-[62px] xl:text-[72px] font-bitter'
        ],
        className
      )}
      elementType={elementType}
      style={style}
      onClick={onClick}
      {...rest}>
      {children}
    </DynamicText>
  );
};
