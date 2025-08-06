export type Menu = {
    id: number,
    text: String;
    link: string;
    icon: string;
    locale: string;
    visible: boolean;
    description?: string;
    children?: Menu[];
}