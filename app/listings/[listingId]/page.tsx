import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";
import { useEffect, useState } from "react";

interface IParams {
  listingId?: string;
}

const ListingPage = ({ params }: { params: IParams }) => {
  const [listing, setListing] = useState<any>(null);
  const [reservations, setReservations] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedListing = await getListingById(params);
      const fetchedReservations = await getReservations(params);
      const fetchedCurrentUser = await getCurrentUser();
      
      setListing(fetchedListing);
      setReservations(fetchedReservations);
      setCurrentUser(fetchedCurrentUser);
    };

    fetchData();
  }, [params]);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient 
        listing={listing} 
        reservations={reservations}
        currentUser={currentUser} 
      />
    </ClientOnly>
  );
};

export default ListingPage;
