"use client";
import { Range } from "react-date-range";
import Calender from "../inputs/Calendar";
import Button from "../Button";
interface ListingReservationPros {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}
const ListingReservation: React.FC<ListingReservationPros> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">₹ {price}</div>
        <div className="font-light text-neutral-500">night</div>
      </div>
      <hr />
      <div className="p-4"></div>
      <Calender
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      <div
        className="
        p-4 flex flex-row items-center justify-between font-semibold text-lg
        ">
        <div>Total</div>
        <div>₹ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
