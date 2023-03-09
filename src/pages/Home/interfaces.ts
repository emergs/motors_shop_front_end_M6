export interface IPhoto {
    id: string;
    urlImage: string;
    public_id: string;
}
export interface IImageGalery {
    id: string;
    photos: IPhoto[];
}

export interface IVehicles {
    id: string;
    type: string;
    title: string;
    description: string;
    km: string;
    year: number;
    value: string;
    price: string;
    imageGalery: IImageGalery;
  }