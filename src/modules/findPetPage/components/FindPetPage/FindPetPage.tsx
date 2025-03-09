import React from "react";
import { PetsResults } from "@/lib/api";

import List from "@/shared/components/List/List";
import SearchBarFindPet from "../SearchBarFindPet/SearchBarFindPet";
import FindPetItem from "../FindPetItem/FindPetItem";
import Container from "@/shared/components/Container/Container";
import Title from "@/shared/components/Title/Title";

export interface FindPetPageProps {
  pets: PetsResults[];
}

export default function FindPetPage({ pets }: FindPetPageProps) {
  return (
    <section>
      <Container>
        <Title className="mb-[40px]">Find your favorite pet</Title>
        {pets && (
          <div className="flex flex-col items-center">
            <SearchBarFindPet />
            <List className="mb-[44px]">
              {pets.map((petsItem) => (
                <FindPetItem
                  key={petsItem._id}
                  id={petsItem._id}
                  imgURL={petsItem.imgURL}
                  petTitle={petsItem.title}
                  petName={petsItem.name}
                  petBirthday={
                    petsItem.birthday
                      ? petsItem.birthday.split("-").reverse().join(".")
                      : "Unknown"
                  }
                  petSex={petsItem.sex}
                  petSpecies={petsItem.species}
                  petCategory={petsItem.category}
                  petDescription={petsItem.comment}
                  popularity={petsItem.popularity}
                />
              ))}
            </List>
          </div>
        )}
      </Container>
    </section>
  );
}
