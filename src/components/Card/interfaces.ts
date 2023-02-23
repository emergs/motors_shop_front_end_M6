export interface ICardAtributes {
  detailsContainerPosition?: string;
}

export interface ICardProps extends ICardAtributes {
  name: string;
  img: string[];
  info: string;
  owner: string;
  owner_initials: string;
  year: string;
  km: string;
  price: string;
  time_auction: string;
  category: string;
}
