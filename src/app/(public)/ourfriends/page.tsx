// import List from "@/components/list";
// import OurfriendsItem from "@/components/our-friends-item";
// import { getOurFriends } from "@/lib/api";
// import React from "react";

// export interface PageProps {}

// export const metadata = {
//   title: "Petlove - Our Friends",
// };

// export default async function Page({}: PageProps) {
//   const friends = await getOurFriends();

//   return (
//     <div className="min-w-[320px] px-[20px] pb-[20px] md:px-[32px] md:pb-[32px] xl:px-[64px]">
//       <List>
//         {friends.map((friend) => (
//           <OurfriendsItem
//             key={friend._id}
//             src={friend.imageUrl}
//             alt="Company image url"
//             companyName={friend.title}
//             email={friend.email}
//             adress={friend.address}
//             phone={friend.phone}
//             workTime={friend.workDays}
//           />
//         ))}
//       </List>
//     </div>
//   );
// }

import Ourfriends from "@/components/ourfriends";
import Title from "@/components/title";
import React from "react";

export interface PageProps {}

export const metadata = {
  title: "Petlove - Our Friends",
};

export default async function Page({}: PageProps) {
  return (
    <>
      <Ourfriends />
    </>
  );
}
