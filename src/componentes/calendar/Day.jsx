import React from "react";
import Reservation from "./Reservation";

export default function Day({ title, reservations = [], setReservationId }) {

    return (
        <div className="flex flex-col min-w-48">
            <span className="text-lg text-center">{title}</span>
            <div className="p-2 m-2 bg-orange-200 rounded-sm shadow-xl hover:shadow-4xl">
                {
                    reservations.map((item, index) => (
                        <React.Fragment key={"reservation-" + index}>
                            <Reservation {...item} setReservationId={setReservationId}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}