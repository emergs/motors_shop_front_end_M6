export interface IUserProps {
    id: string;
    name: string;
    profileImage: string | null;
    email: string;
    cpf: string;
    phone: string;
    birthdate: string;
    description: string;
    typeUser: string;
    createdAt: string;
    updatedAt: string;
}

export interface ICommentProps {
    id: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
    users: IUserProps;
}

export interface IPhoto {
    id: string;
    urlImage: string;
    public_id: string;
}
export interface IImageGalery {
    id: string;
    photos: IPhoto[];
}

export interface IVehicleProps {
    id: string;
    type: string;
    adType: any;
    title: string;
    description: string;
    km: string;
    year: number;
    value: string;
    imageGalery: IImageGalery;
    users: IUserProps;
    comments: ICommentProps;
}
