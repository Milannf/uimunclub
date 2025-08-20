import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #adb5bd;
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 10px; // Keep timeline line on the left
      transform: translateX(0);
    }
  }
`;

interface TimelineEventProps {
  $isLeft: boolean;
  $delay: number;
}

const TimelineEvent = styled.div<TimelineEventProps>`
  position: relative;
  margin-bottom: 150px;
  display: flex;
  flex-direction: row;
  clear: both;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}s;

  @media (max-width: 768px) {
    flex-direction: column; // Stack elements on mobile
    margin-bottom: 50px;
    align-items: center; // Horizontally center the image and content block
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  background-color: #5ab1a7;
  border-radius: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    left: 10px; // Align dot with the new timeline line
    top: 0; // Position dot at the top of the event
    transform: translate(-50%, -100%);
  }
`;

interface EventContentProps {
  $isLeft: boolean;
}

const EventContent = styled.div<EventContentProps>`
  position: relative;
  width: 45%;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: ${props => (props.$isLeft ? 'right' : 'left')};

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    ${props =>
      props.$isLeft
        ? `
      right: -10px;
      border-left: 10px solid #f8f9fa;
    `
        : `
      left: -10px;
      border-right: 10px solid #f8f9fa;
    `}
  }

  @media (max-width: 768px) {
    width: 100%; // Full width on mobile
    text-align: left;
    margin-left: 20px; // Add space for the timeline line and dot
    padding-left: 20px;

    &::before {
      display: none; // Hide the arrow on mobile for a cleaner look
    }
  }
`;

interface EventImageProps {
  $isLeft: boolean;
}

const TimelineImageWrapper = styled.div<EventImageProps>`
  width: 45%;
  border-radius: 5px;
  order: ${props => (props.$isLeft ? -1 : 1)};
  margin-right: ${props => (props.$isLeft ? '80px' : '0')};
  margin-left: ${props => (props.$isLeft ? '0' : '80px')};

  @media (max-width: 768px) {
    width: 70%; // Full width on mobile
    order: -1; // Image always comes first on mobile
    margin: 0 0 20px 0; // Add margin to the bottom
    display: flex; // Use flexbox to center image
    justify-content: center;
  }
`;


const EventDate = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  color: #495057;
  display: block;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    width: 70%; // Full width on mobile
  }
`;

const EventLocation = styled.span`
  font-style: italic;
  color: #6c757d;
  display: block;
  margin-bottom: 5px;
`;

const EventTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 0;
  margin-bottom: 10px;
  color: #000000ff;
  font-family: ${montserrat.style.fontFamily};
`;

interface TimelineItemProps {
  date: string;
  location?: string;
  title: string;
  imageSrc?: string;
}

const TimelineItem: React.FC<TimelineItemProps & { isLeft: boolean; index: number }> = ({
  date,
  location,
  title,
  imageSrc,
  isLeft,
  index,
}) => {
  return (
    <TimelineEvent $isLeft={isLeft} $delay={index * 0.2}>
      {imageSrc && (
        <TimelineImageWrapper $isLeft={isLeft}>
          <Image src={imageSrc} alt={title} width={405} height={250} style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
        </TimelineImageWrapper>
      )}
      <EventContent $isLeft={isLeft}>
        <EventDate>{date}</EventDate>
        {location && <EventLocation>{location}</EventLocation>}
        <EventTitle>{title}</EventTitle>
      </EventContent>
      <TimelineDot />
    </TimelineEvent>
  );
};

const ReplicatedTimeline: React.FC = () => {
  const timelineData: TimelineItemProps[] = [
    {
      date: 'July',
      location: 'Online/Offline',
      title: 'General Introduction to Model United Nations',
      imageSrc: '/backgroundalumni.png',
    },
    {
      date: 'August',
      location: 'Online/Offline',
      title: 'Speech, Negotiation, Diplomacy',
      imageSrc: '/backgroundalumni.png',
    },
    {
      date: 'September',
      location: 'Online/Offline',
      title: 'International Taxation',
      imageSrc: '/backgroundalumni.png',
    },
  ];

  return (
    <TimelineContainer>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} {...item} isLeft={index % 2 === 0} index={index} />
      ))}
    </TimelineContainer>
  );
};

export default ReplicatedTimeline;