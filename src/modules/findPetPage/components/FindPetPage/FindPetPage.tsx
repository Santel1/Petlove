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
  // const [pets, setPets] = useState<PetsResults[]>([]);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   getPets(page)
  //     .then((response) => {
  //       setPets(response.results);
  //       setTotalPages(response.totalPages);
  //       setLoading(false);
  //       console.log(page);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, [page]);

  // const goToNextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  // const goToPreviousPage = () => setPage((prev) => Math.max(prev - 1, 1));
  // const goToFirstPage = () => setPage(1);
  // const goToLastPage = () => setPage(totalPages);

  // const goToNumberPage = (pageNumber: number) => {
  //   getPets(pageNumber);
  //   setPage(pageNumber);
  // };

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
