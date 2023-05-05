import { useState } from "react";
import Sidebar from "../../component/sidebar"
import { useParams } from "react-router";
import { ENTITIES } from "../../api/routeApi";

function ReservationEdit() {

    const [data, setData] = useState([]);
    const { id } = useParams();

    // const [name, setName] = useState('');
    // const [city, setCity] = useState('');
    // const [adress, setAdress] = useState('');
    // const [description, setDescription] = useState('');

    useEffect(() => {
        Default.getData(ENTITIES.reservation.detail.replace(":id", id))
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    console.log(data)





    const handleSubmit = (e) => {
        e.preventDefault();
        // const site = { name, city, adress, description };
        //console.log(site)

        Default.putData(ENTITIES.reservation.edit.replace(":id", id), data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Box display="flex">
            <Sidebar />
            <Box>
                {<form onSubmit={handleSubmit}>
                    {_.entries(data).filter(([field]) => field !== "id").map(([field, fieldValue]) =>
                    (<>
                        <label>{field}</label>
                        <input
                            name={field}
                            type="text"
                            required
                            value={fieldValue}
                            onChange={(e) => setData(_.set(_.cloneDeep(data), field, e.target.value))}
                        />
                    </>
                    ))}
                    <button type='submit'>Modifier</button>
                </form>}
            </Box>
        </Box>
    )
}
export default ReservationEdit