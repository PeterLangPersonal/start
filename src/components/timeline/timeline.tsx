import { TimelineItem, TimelineContent, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { ArrowLeft, ArrowRight, BodyWrapper, ContentWrapper, CustomDot, CustomTimeline, CustomTimelineConnector, DateWrapper, IconWrapper, LineSeparator, OppositeContentWrapper, Position, Location } from "./timeline.styles";

type Content = {
    label: string;
    color: string;
    secondaryColor: string;
    icon: any;
    subtitle?: string;
    link?: string;
    date: string;
}

type TimelineProps = {
    position?: "left" | "right" | "alternate" | "alternate-reverse" | undefined;
    content: Content[];
    isMobile?: boolean;
}

type TimelineItemProps = {
    item: Content;
    left?: boolean;
    prev: Content;
    last?: boolean;
    isMobile: boolean;
}

export const NewTimeline = ({
    position = "alternate",
    content,
    isMobile = false,
}: TimelineProps) => {
    return(
        <CustomTimeline position={position}>
            {
                content.map((item: Content, i, arr) => {
                    return(
                        <NewTimelineItem 
                            item={item} 
                            left={i%2 !== 0}
                            prev={arr[i-1]}
                            last={arr.length-1 === i}
                            key={i}
                            isMobile={isMobile}
                        />
                    )
                })
            }
        </CustomTimeline>
    )
}

const NewTimelineItem = ({
    item,
    prev, 
    left = true,
    last = false,
    isMobile,
}: TimelineItemProps) => {
    return(
        <TimelineItem>
            <TimelineOppositeContent>
                <OppositeContentWrapper left={left}>
                    {!left && <IconWrapper color={item.color} secondaryColor={item.secondaryColor}>{isMobile? item.date: item.icon}</IconWrapper>}
                    <LineSeparator left={left} />
                    {left && <IconWrapper color={item.color} secondaryColor={item.secondaryColor}>{isMobile? item.date: item.icon}</IconWrapper>}
                </OppositeContentWrapper>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <CustomTimelineConnector linecolor={prev !== undefined? prev.color: undefined}/>
                <CustomDot dotcolor={item.color} variant="outlined" />
                <CustomTimelineConnector linecolor={last ? undefined: item.color}/>
            </TimelineSeparator>
            <TimelineContent>
                <ContentWrapper left={left}>
                    {!isMobile && <DateWrapper color={item.secondaryColor}>
                        {item.date}
                    </DateWrapper>}
                    <BodyWrapper left={left} color={item.color} secondaryColor={item.secondaryColor}>
                        <Position isMobile={isMobile}>{item.subtitle}</Position>
                        <Location isMobile={isMobile}>{item.label}</Location>
                    </BodyWrapper>
                    {!isMobile && (left? <ArrowRight color={item.color}/>: <ArrowLeft color={item.color}/>)}
                </ContentWrapper>
            </TimelineContent>
        </TimelineItem>
    )
}