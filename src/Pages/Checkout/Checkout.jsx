import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price,img } = service;
  const {user} = useContext(AuthContext)
  console.log(user);
  const handleBookService = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email
    const price = form.price.value;
    const booking ={
      customerName: name,
      email,
      date,
      service_id: _id,
      price,
      service: title,
      img
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  return (
    <div>
      <h2 className="text-3xl text-center">Book service: {title}</h2>
      <form onSubmit={handleBookService}>
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="email"
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                name="price"
                defaultValue={'$' + price}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn-block btn btn-primary"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
