import maya from "../assets/logos/maya.png";
import qrph from "../assets/logos/qrph.png";
import spay from "../assets/logos/shopee.png";
import wechatpay from "../assets/logos/wechatpay.png";

interface PaymentOptionProps {
  title: string;
}

export default function PaymentOption({ title }: PaymentOptionProps) {
  return (
    <div className="payment-option">
      <img
        src={
          title === "maya"
            ? maya
            : title === "qrph"
              ? qrph
              : title === "spay"
                ? spay
                : title === "wechatpay"
                  ? wechatpay
                  : ""
        }
        alt=""
      />
    </div>
  );
}
