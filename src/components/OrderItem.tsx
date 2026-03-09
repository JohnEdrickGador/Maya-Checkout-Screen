interface OrderItemProps {
  itemName: string;
  itemQty: number;
  itemPrice: number;
}

export default function OrderItem({
  itemName,
  itemQty,
  itemPrice,
}: OrderItemProps) {
  return (
    <div className="order-item">
      <div className="order-item-details">
        <h1>{itemName}</h1>
        <h2>Quantity: {itemQty}</h2>
      </div>
      <div className="order-item-price">
        <h1>PHP {itemPrice * itemQty}</h1>
      </div>
    </div>
  );
}
