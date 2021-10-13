import PhoneInput from "react-phone-number-input";

function PhoneInputHelper({ contact, handleOnChangePhoneInput }) {
  return (
    <>
      <PhoneInput
        type="phone"
        placeholder="Contact Number"
        name="contact"
        value={contact}
        onChange={handleOnChangePhoneInput}
      ></PhoneInput>
    </>
  );
}

export default PhoneInputHelper;
