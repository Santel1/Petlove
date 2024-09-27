import React from "react";
import OurfriendsItem from "@/components/our-friends-item";
import { getOurFriends } from "@/lib/api";
import List from "./list";

export interface OurfriendsProps {}

export default async function Ourfriends({}: OurfriendsProps) {
  const friends = await getOurFriends();

  return (
    <div className="flex justify-center">
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
    </div>
  );
}
