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

export interface IVehicleProps {
    id: string;
    type: string;
    imgCap: string;
    title: string;
    description: string;
    km: string;
    year: number;
    value: string;
    users: IUserProps;
    comments: ICommentProps
}
