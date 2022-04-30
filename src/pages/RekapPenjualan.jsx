import Subheadline from "../components/atoms/FontStyles/Subheadline/Subheadline";
import LinkText from "../components/atoms/FontStyles/Link/Link";
import TableData from "../components/molecules/TableData/TableData";
import TotalPrice from "../components/atoms/TotalPrice/TotalPrice";
import Button from "../components/atoms/Button/Button";
import { useSelector, useDispatch } from "react-redux";

const {
  default: Headline,
} = require("../components/atoms/FontStyles/Headline/Headline");

const RekapPenjualan = () => {
  const { rekap } = useSelector((state) => state.rekap);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const sum = rekap.reduce((accumulator, object) => {
    return accumulator + object.price * object.quantity;
  }, 0);

  return (
    <div className="productList">
      <Headline label="Rekap Penjualan" />
      {rekap.length === 0 ? (
        <Subheadline label="Belum ada penjualan." />
      ) : (
        <div className="wrapped">
          <div className="header">
            <div className="empty"></div>
            <div className="headerLabel">
              <LinkText label="Harga" color="#93918B" />
              <LinkText label="Terjual" color="#93918B" />
              <LinkText label="Total" color="#93918B" />
            </div>
          </div>
          {rekap.map((item) => {
            return (
              <TableData
                productName={item.title}
                unitPrice={item.price}
                totalPrice={item.price * item.quantity}
                quantity={item.quantity}
                imageUrl={item.image}
                disabled="true"
              />
            );
          })}
          <div className="bottomCart">
            <TotalPrice
              headerLabel="Total"
              totalPrice={formatter.format(sum)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RekapPenjualan;
