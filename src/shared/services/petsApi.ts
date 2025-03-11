import {
  Pets,
  OurFriendsResults,
  News,
  buildUrl,
  sendRequest,
} from "../../lib/api";
import { ROUTES } from "../constants";

class PetsApi {
  constructor() {}

  getPets = async (page: number) => {
    const url = buildUrl(ROUTES.PETS, `?page=${page}`);

    const data = await sendRequest<Pets>(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return data;
  };

  getOurFriends = async () => {
    const url = buildUrl(ROUTES.OUR_FRIENDS);

    const data = await sendRequest<OurFriendsResults[]>(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return data;
  };

  getNews = async (page: number) => {
    const url = buildUrl(ROUTES.NEWS, `?page=${page}`);

    const data = await sendRequest<News>(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return data;
  };
  addPetToFavorites = async (id: string, token: string | null) => {
    if (!token) {
      throw new Error("Unauthorized");
    }

    const url = buildUrl(ROUTES.ADD_TO_FAVORITE, id);

    const data = await sendRequest(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };

  removePetFromFavorites = async (id: string, token: string | null) => {
    if (!token) {
      throw new Error("Unauthorized");
    }
    const url = buildUrl(ROUTES.DELETE_FROM_FAVORITE, id);

    const data = await sendRequest(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };
}

export const petsApi = new PetsApi();
