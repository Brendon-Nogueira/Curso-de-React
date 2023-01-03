import './CarDetails.module.css'
const CardDetails = () => {

    const cars = [
        {id: 1, brand: 'Ferrari', km: 0, color: 'red'},
        {id: 2, brand: 'Porche', km: 0, color: 'purple'},
        {id: 3, brand: 'Porche', km: 0, color: 'Black'}   
      ]
    
  return (
    <div>

      <ul className="car_list">
        {cars.map((car) => (
          <li key={car.id}> Modelo:{car.brand} -  KM: {car.km} -  Cor:{car.color}</li>
        ))}
      </ul>

    </div>
  )
}

export default CardDetails