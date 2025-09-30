import React from 'react';


import LoadingScreen from '../loading-screen';
import CloseIcon from '@mui/icons-material/Close';
import { cn } from '@/lib/utils';
import { Text, TextVariant } from '../text';


interface ModalProps {
  popupOpen: boolean;
  popupClose: () => void;
  title?: string;
  isLoading?: boolean;
  titleMiddleChildren?: React.ReactNode;
  children?: React.ReactNode;
  popupContClass?: string;
  titleContClass?: string;
  titleTxtClass?: string;
  size?: 'small' | 'medium' | 'large';
  closeIconClass?: string;
  noCloseIcon?: boolean;
}

const PopupModal: React.FC<ModalProps> = ({
  popupOpen = false,
  popupClose,
  title,
  isLoading = false,
  titleMiddleChildren,
  children,
  popupContClass,
  titleContClass,
  titleTxtClass,
  size = 'large',
  closeIconClass,
  noCloseIcon = false
}) => {
  const modalSizeClass =
    size === 'large'
      ? 'max-w-2xl min-w-[75%]'
      : size === 'medium'
        ? 'max-w-xl min-w-[50%]'
        : 'max-w-md min-w-[30%]';
  const modalPositionClass =
    size === 'small' ? 'items-start pt-20 justify-center' : 'items-center justify-center';

  return (
    popupOpen && (
      <div className={`fixed inset-0 flex ${modalPositionClass} z-50 bg-backDrop`}>
        <div
          className={cn(
            `bg-white p-5 sm:p-2 md:p-3 rounded-md shadow-lg space-y-5 relative ${modalSizeClass}`,
            popupContClass
          )}>
          <div className={titleContClass}>
            {title && (
              <Text
                variant={TextVariant.titleText}
                className={`flex-grow text-center ${titleTxtClass}`}>
                {title}
              </Text>
            )}
            {titleMiddleChildren}
          </div>
          {!noCloseIcon && (
            <CloseIcon
              onClick={popupClose}
              className={`absolute top-[-15px] right-[15px] bg-tertiaryText cursor-pointer ${closeIconClass}`}
            />
          )}

          {children}
          <LoadingScreen isLoading={isLoading} />
        </div>
      </div>
    )
  );
};

export default PopupModal;
