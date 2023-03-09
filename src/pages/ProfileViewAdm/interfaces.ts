export interface IVehicle {
  id: string;
  type: string;
  imgCap: string;
  title: string;
  description: string;
  km: string;
  year: number;
  value: string;
  price: string;
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

// "id": "49b1f6d0-5c9c-42c4-aa6f-72a0d5e4375e",
// 			"name": "Fernando",
// 			"email": "fernando@kenzie.com",
// 			"cpf": "02802802847",
// 			"phone": "62981540735",
// 			"birthdate": "1993-11-11",
// 			"description": "é isso ai",
// 			"typeUser": "seller",
// 			"createdAt": "2023-03-03T01:44:15.517Z",
// 			"updatedAt": "2023-03-03T01:44:15.517Z"
