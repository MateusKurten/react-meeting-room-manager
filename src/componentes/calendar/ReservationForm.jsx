import { useForm } from "react-hook-form";
import { addReservation } from "../../infra/reservations";

export default function ReservationForm({ setReservationId }) {

    const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm({mode:'onChange'});

    async function submitData(data) {
        console.log(data);
        let id = await addReservation(data);
        setReservationId(id);
        reset();
    }
        
    return (
        <div>
            <p className="text-3xl mt-4 mx-2">Add reservation</p>
            <form className="max-w-sm mt-5 grid grid-cols-2 gap-x-4" onSubmit={handleSubmit(submitData)}>
                <div className="mb-5 col-span-2">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input 
                        type="text" 
                        id="description" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        {...register('description', {
                            required: "You must inform event description.",
                            validate: {
                                minLength: (value) => value.length >= 3 || "Description must have at least 3 characters",
                                maxLength: (value) => value.length <= 30 || "Description can not have more than 30 characters",
                            },
                        })}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select 
                        name="category" 
                        required
                        id="category" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        {...register('category', {
                            required: "You must inform event category."
                        })}
                    >
                        <option value="meeting">Meeting</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="recruitment">Recruitment</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label htmlFor="day" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Day</label>
                    <input 
                        type="date" 
                        id="day" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        {...register('day', {
                            required: "You must inform event day.",
                            validate: {
                                min: (value) => value >= new Date().toISOString().split('T')[0] || "Event date should be later than or equal to today"
                            }
                        })}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="start" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start time</label>
                    <input 
                        type="time" 
                        id="start" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        {...register('start', {
                            required: "You must inform when the event is starting."
                        })}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="end" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End time</label>
                    <input 
                        type="time" 
                        id="end" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        {...register('end', {
                            required: "You must inform when the event is ending",
                            validate: {
                                min: (value) => value > getValues().start || "The end time should be later than the start time"
                            }
                        })}
                    />
                </div>
                <div className="errorsContainer col-span-2">
                    {errors.description?.message && (
                        <div>{errors.description.message}</div>
                    )}
                    {errors.category?.message && (
                        <div>{errors.category.message}</div>
                    )}
                    {errors.day?.message && (
                        <div>{errors.day.message}</div>
                    )}
                    {errors.start?.message && (
                        <div>{errors.start.message}</div>
                    )}
                    {errors.end?.message && (
                        <div>{errors.end.message}</div>
                    )}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
