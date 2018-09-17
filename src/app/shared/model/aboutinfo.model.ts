export class PersonInfo {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class RootObject {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: PersonInfo[];
}
