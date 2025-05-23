import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
import { BsDoorOpenFill, BsPersonVcardFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

export default function EJInfoPark({ MapperPark, no_controls }) {
    let dataAgo = [];
    let date = new Date();

    for (let i = 0; i <= date.getHours(); i++) {
        dataAgo[i] = `${i}h`;
    }

    function generateStoragePark() {
        localStorage.setItem('parkSelected', JSON.stringify(MapperPark))
    }

    const data = {
        labels: dataAgo,
        datasets: [
            {
                label: "Fluxo do estacionamento",
                data: [50, 30, 20, 50, 20, 10, 20, 30, 50, 30, 20, 50, 30, 20, 50, 20, 10, 20, 30, 50], 
                borderColor: "#0d6efd", 
                backgroundColor: "rgba(13, 110, 253, 0.2)", 
                borderWidth: 2,
                pointRadius: 5, 
                pointHoverRadius: 7, 
                fill: true, 
                tension: 0.1
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
              position: "bottom",
            },
        },
        scales: {
            
            y: {
                beginAtZero: true, 
            },
        },
    };

    console.log(MapperPark)

    return (
        <div className="info-park">
            <div className="map-park">
                <h2>Mapa do Estacionamento</h2>
                <img src={MapperPark.companyParkImageMap} alt="Map" />
            </div>

            <div className="atividade">
                <div className="atividade-info">
                    <h2>Atividade</h2>
                    <Line className="graph" style={{margin: '0px'}} data={data} options={options} />
                </div>

                {
                    !no_controls ? <div className="atividade-btns">
                                        <Link
                                            className="btn btn-success rounded-0 d-flex gap-2 align-items-center justify-content-center"
                                            disabled={MapperPark.companyParkSlotsFilled === MapperPark.companyParkSlots}
                                            to={`reserva`}
                                            onClick={generateStoragePark}
                                        >
                                            <BsPersonVcardFill />

                                            Fazer uma reserva
                                        </Link>
                                        <Link 
                                            className="btn btn-outline-dark rounded-0  d-flex gap-2 align-items-center justify-content-center"
                                            to={`suporte`}>
                                            <BiSupport />
                                            Falar com o suporte
                                        </Link>
                                    </div>
                    : null
                }
            </div>

        </div>
    );
}
