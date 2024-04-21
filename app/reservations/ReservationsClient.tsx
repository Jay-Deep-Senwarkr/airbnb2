'ues client'
import {toast} from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../types";
import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/listings/ListingCard";

const ReservationsClient = () => {
    return ( <div>
        <Container>
            <Heading 
            title="Reservations"
            subtitle="Bookings on your properties"
            />
        </Container>
    </div> );
}
 
export default ReservationsClient;