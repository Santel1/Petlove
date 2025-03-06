import React from "react";
import OurfriendsItem from "@/modules/ourFriendsPage/components/OurFriendsItem/OurFriendsItem";
import { OurFriendsResults } from "@/lib/api";
import List from "@/shared/components/List/List";
import Container from "@/shared/components/Container/Container";
import Title from "@/shared/components/Title/Title";

export interface OurFriendsPageProps {
  ourFriends: OurFriendsResults[];
}

export default function OurFriendsPage({ ourFriends }: OurFriendsPageProps) {
  return (
    <section>
      <Container>
        <Title className="mb-[60px]">Our Friends</Title>
        {ourFriends && (
          <div className="flex justify-center">
            <List>
              {ourFriends.map((friend) => (
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
        )}
      </Container>
    </section>
  );
}
