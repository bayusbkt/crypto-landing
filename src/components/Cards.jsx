import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Button from "./Button";

const cardsData = [
  {
    image: Single,
    heading: "Single User",
    price: 129000,
    description: ["500 GB Storage", "1 User Allowed", "Send up to 2 GB"],
  },
  {
    image: Double,
    heading: "Partnership",
    backgroundColor: 'bg-gray-100',
    price: 149000,
    description: ["1 TB Storage", "3 User Allowed", "Send up to 10 GB"],
  },
  {
    image: Triple,
    heading: "Group Account",
    price: 299000,
    description: ["5 TB Storage", "10 User Allowed", "Send up to 20 GB"],
  },
];

const Cards = () => {
  const formatRupiah = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardsData.map((data, index) => (
          <div
            className={`w-full shadow-xl flex flex-col ${data.backgroundColor} p-4 my-8 rounded-lg hover:scale-105 duration-300`}
            key={index}
          >
            <img
              className="w-20 mx-auto mt-[-3rem] "
              src={data.image}
              alt={data.image}
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {data.heading}
            </h2>
            <p className="text-center text-4xl font-bold mb-4">{formatRupiah(data.price)}</p>
            {data.description.map((desc, index) => (
              <div className="text-center font-medium" key={index}>
                <p className="py-2 border-b mx-8">{desc}</p>
              </div>
            ))}
            <Button bgColor="#00df9a" textColor="black" text="Start Trial" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
