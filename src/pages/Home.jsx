import { useState, useEffect } from "react";
import { listReservations } from "../infra/reservations";
import Day from "../componentes/calendar/Day";
import ReservationForm from "../componentes/calendar/ReservationForm";


export default function Home() {

    const [reservationId, setReservationId] = useState("");
    const [reservations, setReservations] = useState([]);

    function sortDayReservations(dayEvents) {
        const sortedEvents = dayEvents.sort((a, b) => {
            const startTimeA = a.start.split(':').map(Number);
            const startTimeB = b.start.split(':').map(Number);
            
            if (startTimeA[0] !== startTimeB[0]) {
                return startTimeA[0] - startTimeB[0];
            }
            
            // If hours are the same, compare minutes
            return startTimeA[1] - startTimeB[1];
        })
        
        return sortedEvents
    };

    useEffect(() => {
        async function fetchData() {
            const reservations = await listReservations();
            const days = Object.keys(reservations).sort();
            let sortedReservations = {}
            days.forEach(key => {
                sortedReservations[key] = sortedReservations[key] ?? [];
                let sortedDayReservations = sortDayReservations(reservations[key]);
                sortedDayReservations.forEach(value => {
                    sortedReservations[key].push(value);
                })
            });
            setReservations(sortedReservations);
        }

        fetchData();
    }, [reservationId]);

    return (
        <div className="flex flex-col">
            <ReservationForm setReservationId={setReservationId}/>
            <p className="my-4 text-3xl">Calendar</p>
            <div className="flex flex-wrap">
                {
                    Object.keys(reservations).map(key => 
                        <Day title={key} reservations={reservations[key]} setReservationId={setReservationId}/>
                    )
                }
            </div>
        </div>
    )
}
