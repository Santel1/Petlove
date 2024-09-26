import React from "react";
import OurfriendsItem from "@/components/our-friends-item";
import { getOurFriends } from "@/lib/api";
import List from "./list";
import Title from "./title";

export interface OurfriendsProps {}

export default async function Ourfriends({}: OurfriendsProps) {
  const friends = await getOurFriends();

  return (
    <div className="min-w-[320px] px-[20px] pb-[20px] md:px-[32px] md:pb-[32px] xl:px-[64px]">
      <Title>Our Friends</Title>
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
    </div>
  );
}
