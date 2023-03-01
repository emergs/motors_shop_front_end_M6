import { FiClock } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { vehicles } from "../../database";
import { AuctionStyled } from "./style";

const Auction = () => {
  return (
    <AuctionStyled id="auction">
      <h2>Leilão</h2>
      <ul>
        {vehicles.map((e, index) => {
          return (
            <li key={index} className="card">
              <section className="card-info">
                <div className="card-time">
                  <span>
                    <FiClock />
                  </span>
                  <span>{e.time_auction}</span>
                </div>
                <h3>{e.name}</h3>
                <img src={e.img[0]} alt={e.name} />
                <p>{e.info}</p>
                <div className="card-info-owner">
                  <span>{e.owner_initials}</span>
                  <span>{e.owner}</span>
                </div>
                <div className="card-year-km-price">
                  <div className="card-year-km">
                    <span>{e.year}</span>
                    <span>{e.km} KM</span>
                  </div>
                  <div className="card-price">
                    <span>R$ {e.price}</span>
                  </div>
                </div>
              </section>
              <div className="card-auction">
                <span>Acessar página do leilão</span>
                <span>
                  <HiOutlineArrowRight />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </AuctionStyled>
  );
};

export default Auction;
