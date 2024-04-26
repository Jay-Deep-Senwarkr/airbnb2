import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationsClient from "./ReservationsClient";
import { SafeListing, SafeReservation } from "../types";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  const safeReservations: SafeReservation[] = reservations.map((reservation) => ({
    ...reservation,
    createdAt: reservation.createAt.toString(),
    startDate: reservation.startDate.toString(),
    endDate: reservation.endDate.toString(),
    listing: {
      ...reservation.listing,
      createdAt: reservation.listing.createdAt.toString(),
    } as SafeListing,
  }));

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subtitle="No one reserved on your property"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={safeReservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReservationsPage;