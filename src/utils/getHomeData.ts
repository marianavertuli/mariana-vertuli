import { api } from "@/lib/api";
import { HomeDataProps } from "@/types/homeDataProps.type";


export async function getHomeData(): Promise<HomeDataProps> {
    try {
        const queryParams = new URLSearchParams({
            query: JSON.stringify({
                slug: 'mariana-vertuli'
            }),
            props: 'slug,title,metadata',
            read_key: process.env.COSMIC_READ_KEY as string
        })
        const url = `${process.env.NEXT_PUBLIC_API_URL}/objects?${queryParams.toString()}`;
        const res = await api.get(url);
        if (!res.data) {
            throw new Error("Failed to fetch data");
        }

        return res.data;

    } catch (err) {
        throw new Error("Failed to fetch data");
    }
}