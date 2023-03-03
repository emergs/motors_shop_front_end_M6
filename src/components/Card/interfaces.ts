export interface ICardAtributes {
    position?: string;
    display?: string;
    flexDirection?: string;
    width?: string;
    height?: string;
    minWidth?: string;
    minHeight?: string;
    margin?: string;

    //div details
    detailsContainerWidth?: string;
    detailsContainerHeight?: string;
    detailsContainerPosition?: string;
    detailsContainerBackground?: string;
    detailsContainerJustifyContent?: string;
    infoColor?: string;
    priceColor?: string;
    timeDisplay?: string;
    // img atributes
    imgWidth?: string;
    imgHeight?: string;

    //vehicle name color
    titleColor?: string;

    //button container
    buttonContainerBackground?: string;
    buttonBorder?: string;
    buttonColor?: string;
    buttonBackground?: string;
    buttonPadding?: string;
    buttonHoverBackground?: string;
    buttonHoverColor?: string;
}

export interface ICardProps extends ICardAtributes {
    id: string;
    type: string;
    imgCap: string;
    title: string;
    description: string;
    km: string;
    year: number;
    value: string;
}
