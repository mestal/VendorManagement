export interface IVendor {
    Id: number;
    Name: string;
}

export interface IEmployee {
    id: number;
    name: string;
}

export interface IUser {
    id: number;
    name: string;
}

export interface IVendorUser {
    id: number;
    username: string;
}

export interface IVendorEmployee {
    id: number;
    name: string;
    status: number;
}

export interface IChangeEmployeeStatusRequest {
    EmployeeId: number,
    EmployeeStatus: number
}

export interface IChangeEmployeeStatusResult {
    Success: boolean,
    Message: string
}

export interface IVendorUserDetail {
    id: number;
    username: string;
    password: string;
}

export interface IPagedList<T> {
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    items: T[];
}
