export interface IPhoto {
  id: string;
  urlImage: string;
  public_id: string;
}

export interface IImageGalery {
  id: string;
  photos: IPhoto[];
}

export interface IVehicle {
  id: string;
  type: string;
  imageGalery: IImageGalery;
  title: string;
  description: string;
  km: string;
  year: number;
  value: string;
}

export interface IUser {
  id: string;
  name: string;
  profileImage: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  typeUser: string;
  createdAt: Date;
  updatedAt: Date;
}
