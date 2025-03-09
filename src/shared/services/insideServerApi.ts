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

  getPets = async (page: number): Promise<Pets> => {
    const res = await fetch(`${this.serverUrl}/api/notices?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch pets: ${res.status} ${res.statusText}`);
    }

    return res.json();
  };

  getOurFriends = async (): Promise<OurFriendsResults[]> => {
    const res = await fetch(`${this.serverUrl}/api/friends`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch our friends: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  };

  getNews = async (page: number): Promise<News> => {
    const res = await fetch(`${this.serverUrl}/api/news?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch news: ${res.status} ${res.statusText}`);
    }

    return res.json();
  };
  addPetToFavorites = async (id: string): Promise<void> => {
    const res = await fetch(`${this.serverUrl}/api/notices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error(
        `Failed to add pet to favorites: ${res.status} ${res.statusText}`
      );
    }
  };

  removePetFromFavorites = async (id: string): Promise<void> => {
    const res = await fetch(`${this.serverUrl}/api/notices`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) {
      throw new Error(
        `Failed to remove pet from favorites: ${res.status} ${res.statusText}`
      );
    }
  };
}

export const insideServerApi = new InsideServerApi();
