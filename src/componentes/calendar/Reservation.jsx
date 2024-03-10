import React from "react";
import { deleteReservation } from "../../infra/reservations";

export default function Reservation({description, category, start, end, id, setReservationId}) {
    let bgColor;

    switch (category) {
        case 'cleaning':
            bgColor = 'bg-blue-300';
            break;
        case 'meeting':
            bgColor = 'bg-green-300'
            break;
        case 'recruitment':
            bgColor = 'bg-red-300'
            break;
        default:
            bgColor = 'bg-gray-300'
            break;
    }

    async function handleDelete() {
        await deleteReservation(id);
        setReservationId(null);
    }

    return (
        <div className={bgColor + " min-h-24 bg-blue-200 rounded-lg p-2 shadow-sm hover:shadow-md mb-2"}>
            <div className="flex flex-col">
                <div className="flex flex-col mb-4">
                    <div className="flex justify-between">
                        <span>{description}</span>
                        <button
                            onClick={handleDelete}
                            className="text-red-500 cursor-pointer hover:text-red-700 px-1 py-0"
                            >
                            x
                        </button>
                    </div>
                    <span className="text-xs text-gray-500">{category}</span>
                </div>
                <div>
                    <p className="text-sm">Start: {start}</p>
                    <p className="text-sm">End: {end}</p>
                </div>
            </div>
        </div>
    )
}