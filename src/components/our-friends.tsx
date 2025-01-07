"use client";

import React, { useEffect, useState } from "react";
import OurfriendsItem from "@/components/our-friends-item";
import { getOurFriends, OurFriendsResults } from "@/lib/api";
import List from "./list";
import Loader from "./loader";

export interface OurfriendsProps {}

export default function Ourfriends({}: OurfriendsProps) {
  const [friends, setFriends] = useState<OurFriendsResults[]>([]);
  const [loading, setLoading] = useState(false);
  // const friends = await getOurFriends();

  useEffect(() => {
    setLoading(true);
    getOurFriends()
      .then((response) => {
        setFriends(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex justify-center">
      {loading ? (
        <Loader />
      ) : (
        <List>
          {friends.map((friend) => (
            <OurfriendsItem
              key={friend._id}
              src={friend.imageUrl}
              alt="Company image url"
              companyName={friend.title}
              email={friend.email}
              adress={friend.address}
              phone={friend.phone}
              workTime={friend.workDays}
            />
          ))}
        </List>
      )}
    </div>
  );
}
