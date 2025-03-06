import { headers } from "next/headers";
import { Pets, OurFriendsResults, News } from "../../lib/api";

class InsideServerApi {
  constructor() {}

  get serverUrl() {
    const host = headers().get("host");
    const protocol = host && host.includes("localhost") ? "http" : "https";
    const serverUrl = host ? `${protocol}://${host}` : "";
    return serverUrl;
  }

  getPets = async (page = 1): Promise<Pets> => {
    const res = await fetch(`${this.serverUrl}/api/find-pet?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch pets: ${res.status} ${res.statusText}`);
    }

    return res.json();
  };

  getOurFriends = async (): Promise<OurFriendsResults[]> => {
    const res = await fetch(`${this.serverUrl}/api/our-friends`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch our friends: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  };

  getNews = async (page = 1): Promise<News> => {
    const res = await fetch(`${this.serverUrl}/api/news?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
    }

    return res.json();
  };
}

export const insideServerApi = new InsideServerApi();
